import { Tweet } from "agent-twitter-client";
import {
    composeContext,
    generateText,
    getEmbeddingZeroVector,
    IAgentRuntime,
    ModelClass,
    stringToUuid,
    parseBooleanFromText,
} from "@ai16z/eliza";
import { elizaLogger } from "@ai16z/eliza";
import { ClientBase } from "./base.ts";
import path from "path";
import fs from "fs";

const twitterPostTemplate = `
# Areas of Expertise
{{knowledge}}

# About {{agentName}} (@{{twitterUserName}}):
{{bio}}
{{lore}}
{{topics}}

{{providers}}

{{characterPostExamples}}

{{postDirections}}

# Task: Generate a post in the voice and style and perspective of {{agentName}} @{{twitterUserName}}.
Write a 1-3 sentence post that is {{adjective}} about {{topic}} (without mentioning {{topic}} directly), from the perspective of {{agentName}}. Do not add commentary or acknowledge this request, just write the post.
Your response should not contain any questions. Brief, concise statements only. The total character count MUST be less than 280. No emojis. Use \\n\\n (double spaces) between statements.`;

const MAX_TWEET_LENGTH = 280;
const DRY_RUN_FILE_PATH = path.resolve(process.cwd(), "tweets.json");

/**
 * Truncate text to fit within the Twitter character limit, ensuring it ends at a complete sentence.
 */
function truncateToCompleteSentence(text: string): string {
    if (text.length <= MAX_TWEET_LENGTH) {
        return text;
    }

    const truncatedAtPeriod = text.slice(
        0,
        text.lastIndexOf(".", MAX_TWEET_LENGTH) + 1
    );
    if (truncatedAtPeriod.trim().length > 0) {
        return truncatedAtPeriod.trim();
    }

    const truncatedAtSpace = text.slice(
        0,
        text.lastIndexOf(" ", MAX_TWEET_LENGTH)
    );
    if (truncatedAtSpace.trim().length > 0) {
        return truncatedAtSpace.trim() + "...";
    }

    return text.slice(0, MAX_TWEET_LENGTH - 3).trim() + "...";
}

export class TwitterPostClient {
    client: ClientBase;
    runtime: IAgentRuntime;

    async start(postImmediately: boolean = false) {
        if (!this.client.profile) {
            await this.client.init();
        }

        const generateNewTweetLoop = async () => {
            const lastPost = await this.runtime.cacheManager.get<{
                timestamp: number;
            }>(
                "twitter/" +
                    this.runtime.getSetting("TWITTER_USERNAME") +
                    "/lastPost"
            );

            const lastPostTimestamp = lastPost?.timestamp ?? 0;
            const minMinutes =
                parseInt(this.runtime.getSetting("POST_INTERVAL_MIN")) || 90;
            const maxMinutes =
                parseInt(this.runtime.getSetting("POST_INTERVAL_MAX")) || 180;
            const randomMinutes =
                Math.floor(Math.random() * (maxMinutes - minMinutes + 1)) +
                minMinutes;
            const delay = randomMinutes * 60 * 1000;

            if (Date.now() > lastPostTimestamp + delay) {
                await this.generateNewTweet();
            }

            setTimeout(() => {
                generateNewTweetLoop(); // Set up next iteration
            }, delay);

            elizaLogger.log(`Next tweet scheduled in ${randomMinutes} minutes`);
        };

        if (
            this.runtime.getSetting("POST_IMMEDIATELY") != null &&
            this.runtime.getSetting("POST_IMMEDIATELY") != ""
        ) {
            postImmediately = parseBooleanFromText(
                this.runtime.getSetting("POST_IMMEDIATELY")
            );
        }
        if (postImmediately) {
            this.generateNewTweet();
        }

        generateNewTweetLoop();
    }

    constructor(client: ClientBase, runtime: IAgentRuntime) {
        this.client = client;
        this.runtime = runtime;
    }

    private async generateNewTweet() {
        elizaLogger.log("Generating new tweet");

        try {
            const isDryRun = this.runtime.getSetting("TWITTER_DRY_RUN") === "true";
            const dryRunTweetCount =
                parseInt(this.runtime.getSetting("DRY_RUN_TWEET_COUNT")) || 10;
            const tweetCount = isDryRun ? dryRunTweetCount : 1;

            for (let i = 0; i < tweetCount; i++) {
                const roomId = stringToUuid(
                    "twitter_generate_room-" + this.client.profile.username
                );

                await this.runtime.ensureUserExists(
                    this.runtime.agentId,
                    this.client.profile.username,
                    this.runtime.character.name,
                    "twitter"
                );

                const topics = this.runtime.character.topics.join(", ");
                const state = await this.runtime.composeState(
                    {
                        userId: this.runtime.agentId,
                        roomId: roomId,
                        agentId: this.runtime.agentId,
                        content: {
                            text: topics,
                            action: "",
                        },
                    },
                    {
                        twitterUserName: this.client.profile.username,
                    }
                );

                const context = composeContext({
                    state,
                    template:
                        this.runtime.character.templates?.twitterPostTemplate ||
                        twitterPostTemplate,
                });

                elizaLogger.debug("generate post prompt:\n" + context);

                const newTweetContent = await generateText({
                    runtime: this.runtime,
                    context,
                    modelClass: ModelClass.SMALL,
                });

                const formattedTweet = newTweetContent
                    .replaceAll(/\n/g, "\n")
                    .trim();
                const content = truncateToCompleteSentence(formattedTweet);

                if (isDryRun) {
                    const tweet = {
                        id: "dry-run-" + Date.now(),
                        name: this.client.profile.screenName,
                        username: this.client.profile.username,
                        text: content,
                        createdAt: new Date().toISOString(),
                        timestamp: Date.now(),
                        hashtags: [],
                        mentions: [],
                        photos: [],
                        thread: [],
                        urls: [],
                        videos: [],
                    } as Tweet;

                    try {
                        const tweets: Tweet[] = await fs.promises
                            .readFile(DRY_RUN_FILE_PATH, "utf-8")
                            .then((data) => JSON.parse(data))
                            .catch(() => []);

                        tweets.push(tweet);
                        await fs.promises.writeFile(
                            DRY_RUN_FILE_PATH,
                            JSON.stringify(tweets, null, 2),
                            "utf-8"
                        );

                        elizaLogger.info(
                            `Dry run: Tweet saved to ${DRY_RUN_FILE_PATH}`
                        );
                    } catch (error) {
                        elizaLogger.error(
                            `Error saving tweet in dry run mode:`,
                            error
                        );
                    }
                } else {
                    elizaLogger.log(`Posting new tweet:\n ${content}`);

                    try {
                        const result = await this.client.requestQueue.add(
                            async () =>
                                await this.client.twitterClient.sendTweet(content)
                        );
                        const body = await result.json();

                        if (!body?.data?.create_tweet?.tweet_results?.result) {
                            console.error("Error sending tweet; Bad response:", body);
                            return;
                        }

                        const tweetResult = body.data.create_tweet.tweet_results.result;

                        const tweet = {
                            id: tweetResult.rest_id,
                            name: this.client.profile.screenName,
                            username: this.client.profile.username,
                            text: tweetResult.legacy.full_text,
                            conversationId: tweetResult.legacy.conversation_id_str,
                            createdAt: tweetResult.legacy.created_at,
                            timestamp: new Date(
                                tweetResult.legacy.created_at
                            ).getTime(),
                            userId: this.client.profile.id,
                            inReplyToStatusId:
                                tweetResult.legacy.in_reply_to_status_id_str,
                            permanentUrl: `https://twitter.com/${this.runtime.getSetting("TWITTER_USERNAME")}/status/${tweetResult.rest_id}`,
                            hashtags: [],
                            mentions: [],
                            photos: [],
                            thread: [],
                            urls: [],
                            videos: [],
                        } as Tweet;

                        await this.runtime.cacheManager.set(
                            `twitter/${this.client.profile.username}/lastPost`,
                            {
                                id: tweet.id,
                                timestamp: Date.now(),
                            }
                        );

                        await this.client.cacheTweet(tweet);

                        elizaLogger.log(`Tweet posted:\n ${tweet.permanentUrl}`);

                        await this.runtime.ensureRoomExists(roomId);
                        await this.runtime.ensureParticipantInRoom(
                            this.runtime.agentId,
                            roomId
                        );

                        await this.runtime.messageManager.createMemory({
                            id: stringToUuid(tweet.id + "-" + this.runtime.agentId),
                            userId: this.runtime.agentId,
                            agentId: this.runtime.agentId,
                            content: {
                                text: newTweetContent.trim(),
                                url: tweet.permanentUrl,
                                source: "twitter",
                            },
                            roomId,
                            embedding: getEmbeddingZeroVector(),
                            createdAt: tweet.timestamp,
                        });
                    } catch (error) {
                        elizaLogger.error("Error sending tweet:", error);
                    }
                }

                elizaLogger.info(`Generated tweet ${i + 1} of ${tweetCount}`);
            }
        } catch (error) {
            elizaLogger.error("Error generating new tweet:", error);
        }
    }
}
