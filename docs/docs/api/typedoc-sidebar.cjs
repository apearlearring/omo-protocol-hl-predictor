// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const typedocSidebar = {
  items: [
    {
      type: "category",
      label: "Classes",
      items: [
        { type: "doc", id: "api/classes/DirectClient", label: "DirectClient" },
        {
          type: "doc",
          id: "api/classes/DiscordClient",
          label: "DiscordClient",
        },
        {
          type: "doc",
          id: "api/classes/PostgresDatabaseAdapter",
          label: "PostgresDatabaseAdapter",
        },
        {
          type: "doc",
          id: "api/classes/SqliteDatabaseAdapter",
          label: "SqliteDatabaseAdapter",
        },
        {
          type: "doc",
          id: "api/classes/TelegramClient",
          label: "TelegramClient",
        },
        {
          type: "doc",
          id: "api/classes/TokenProvider",
          label: "TokenProvider",
        },
        {
          type: "doc",
          id: "api/classes/TwitterGenerationClient",
          label: "TwitterGenerationClient",
        },
        {
          type: "doc",
          id: "api/classes/TwitterInteractionClient",
          label: "TwitterInteractionClient",
        },
        {
          type: "doc",
          id: "api/classes/TwitterSearchClient",
          label: "TwitterSearchClient",
        },
      ],
    },
    {
      type: "category",
      label: "Interfaces",
      items: [
        {
          type: "doc",
          id: "api/interfaces/CreateAndBuyContent",
          label: "CreateAndBuyContent",
        },
      ],
    },
    {
      type: "category",
      label: "Variables",
      items: [
        { type: "doc", id: "api/variables/askClaude", label: "askClaude" },
        {
          type: "doc",
          id: "api/variables/boredomProvider",
          label: "boredomProvider",
        },
        {
          type: "doc",
          id: "api/variables/claudeHandlerTemplate",
          label: "claudeHandlerTemplate",
        },
        {
          type: "doc",
          id: "api/variables/continueAction",
          label: "continueAction",
        },
        { type: "doc", id: "api/variables/executeSwap", label: "executeSwap" },
        { type: "doc", id: "api/variables/followRoom", label: "followRoom" },
        { type: "doc", id: "api/variables/ignore", label: "ignore" },
        {
          type: "doc",
          id: "api/variables/imageGeneration",
          label: "imageGeneration",
        },
        { type: "doc", id: "api/variables/muteRoom", label: "muteRoom" },
        { type: "doc", id: "api/variables/none", label: "none" },
        {
          type: "doc",
          id: "api/variables/orderBookProvider",
          label: "orderBookProvider",
        },
        { type: "doc", id: "api/variables/elizaLog", label: "elizaLog" },
        {
          type: "doc",
          id: "api/variables/shouldContinueTemplate",
          label: "shouldContinueTemplate",
        },
        {
          type: "doc",
          id: "api/variables/shouldFollowTemplate",
          label: "shouldFollowTemplate",
        },
        {
          type: "doc",
          id: "api/variables/shouldMuteTemplate",
          label: "shouldMuteTemplate",
        },
        {
          type: "doc",
          id: "api/variables/shouldUnmuteTemplate",
          label: "shouldUnmuteTemplate",
        },
        {
          type: "doc",
          id: "api/variables/timeProvider",
          label: "timeProvider",
        },
        {
          type: "doc",
          id: "api/variables/tokenProvider",
          label: "tokenProvider",
        },
        {
          type: "doc",
          id: "api/variables/unfollowRoom",
          label: "unfollowRoom",
        },
        { type: "doc", id: "api/variables/unmuteRoom", label: "unmuteRoom" },
        {
          type: "doc",
          id: "api/variables/walletProvider",
          label: "walletProvider",
        },
      ],
    },
    {
      type: "category",
      label: "Functions",
      items: [
        { type: "doc", id: "api/functions/buyToken", label: "buyToken" },
        {
          type: "doc",
          id: "api/functions/createAndBuyToken",
          label: "createAndBuyToken",
        },
        {
          type: "doc",
          id: "api/functions/generateCaption",
          label: "generateCaption",
        },
        {
          type: "doc",
          id: "api/functions/generateImage",
          label: "generateImage",
        },
        {
          type: "doc",
          id: "api/functions/isCreateAndBuyContent",
          label: "isCreateAndBuyContent",
        },
        { type: "doc", id: "api/functions/sellToken", label: "sellToken" },
      ],
    },
  ],
};
module.exports = typedocSidebar.items;
