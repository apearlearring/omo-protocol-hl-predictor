// @ts-check
/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const typedocSidebar = { items: [{"type":"category","label":"Enumerations","items":[{"type":"doc","id":"enumerations/ImageGenModel","label":"ImageGenModel"},{"type":"doc","id":"enumerations/GoalStatus","label":"GoalStatus"},{"type":"doc","id":"enumerations/ModelClass","label":"ModelClass"},{"type":"doc","id":"enumerations/ModelProvider","label":"ModelProvider"},{"type":"doc","id":"enumerations/Clients","label":"Clients"}]},{"type":"category","label":"Classes","items":[{"type":"doc","id":"classes/PostgresDatabaseAdapter","label":"PostgresDatabaseAdapter"},{"type":"doc","id":"classes/SqliteDatabaseAdapter","label":"SqliteDatabaseAdapter"},{"type":"doc","id":"classes/DirectClient","label":"DirectClient"},{"type":"doc","id":"classes/DiscordClient","label":"DiscordClient"},{"type":"doc","id":"classes/TelegramClient","label":"TelegramClient"},{"type":"doc","id":"classes/TwitterInteractionClient","label":"TwitterInteractionClient"},{"type":"doc","id":"classes/TwitterPostClient","label":"TwitterPostClient"},{"type":"doc","id":"classes/TwitterSearchClient","label":"TwitterSearchClient"},{"type":"doc","id":"classes/DatabaseAdapter","label":"DatabaseAdapter"},{"type":"doc","id":"classes/MemoryManager","label":"MemoryManager"},{"type":"doc","id":"classes/AgentRuntime","label":"AgentRuntime"},{"type":"doc","id":"classes/TokenProvider","label":"TokenProvider"},{"type":"doc","id":"classes/WalletProvider","label":"WalletProvider"}]},{"type":"category","label":"Interfaces","items":[{"type":"doc","id":"interfaces/CreateAndBuyContent","label":"CreateAndBuyContent"},{"type":"doc","id":"interfaces/Content","label":"Content"},{"type":"doc","id":"interfaces/ActionExample","label":"ActionExample"},{"type":"doc","id":"interfaces/ConversationExample","label":"ConversationExample"},{"type":"doc","id":"interfaces/Actor","label":"Actor"},{"type":"doc","id":"interfaces/Objective","label":"Objective"},{"type":"doc","id":"interfaces/Goal","label":"Goal"},{"type":"doc","id":"interfaces/State","label":"State"},{"type":"doc","id":"interfaces/Memory","label":"Memory"},{"type":"doc","id":"interfaces/MessageExample","label":"MessageExample"},{"type":"doc","id":"interfaces/Action","label":"Action"},{"type":"doc","id":"interfaces/EvaluationExample","label":"EvaluationExample"},{"type":"doc","id":"interfaces/Evaluator","label":"Evaluator"},{"type":"doc","id":"interfaces/Provider","label":"Provider"},{"type":"doc","id":"interfaces/Relationship","label":"Relationship"},{"type":"doc","id":"interfaces/Account","label":"Account"},{"type":"doc","id":"interfaces/Participant","label":"Participant"},{"type":"doc","id":"interfaces/Room","label":"Room"},{"type":"doc","id":"interfaces/IDatabaseAdapter","label":"IDatabaseAdapter"},{"type":"doc","id":"interfaces/IMemoryManager","label":"IMemoryManager"},{"type":"doc","id":"interfaces/IAgentRuntime","label":"IAgentRuntime"},{"type":"doc","id":"interfaces/IImageRecognitionService","label":"IImageRecognitionService"},{"type":"doc","id":"interfaces/ITranscriptionService","label":"ITranscriptionService"},{"type":"doc","id":"interfaces/IVideoService","label":"IVideoService"},{"type":"doc","id":"interfaces/ILlamaService","label":"ILlamaService"},{"type":"doc","id":"interfaces/IBrowserService","label":"IBrowserService"},{"type":"doc","id":"interfaces/ISpeechService","label":"ISpeechService"},{"type":"doc","id":"interfaces/IPdfService","label":"IPdfService"}]},{"type":"category","label":"Type Aliases","items":[{"type":"doc","id":"type-aliases/UUID","label":"UUID"},{"type":"doc","id":"type-aliases/Model","label":"Model"},{"type":"doc","id":"type-aliases/Models","label":"Models"},{"type":"doc","id":"type-aliases/Handler","label":"Handler"},{"type":"doc","id":"type-aliases/HandlerCallback","label":"HandlerCallback"},{"type":"doc","id":"type-aliases/Validator","label":"Validator"},{"type":"doc","id":"type-aliases/Media","label":"Media"},{"type":"doc","id":"type-aliases/Plugin","label":"Plugin"},{"type":"doc","id":"type-aliases/Character","label":"Character"}]},{"type":"category","label":"Variables","items":[{"type":"doc","id":"variables/messageHandlerTemplate","label":"messageHandlerTemplate"},{"type":"doc","id":"variables/shouldContinueTemplate","label":"shouldContinueTemplate"},{"type":"doc","id":"variables/continueAction","label":"continueAction"},{"type":"doc","id":"variables/shouldFollowTemplate","label":"shouldFollowTemplate"},{"type":"doc","id":"variables/followRoom","label":"followRoom"},{"type":"doc","id":"variables/ignore","label":"ignore"},{"type":"doc","id":"variables/imageGeneration","label":"imageGeneration"},{"type":"doc","id":"variables/shouldMuteTemplate","label":"shouldMuteTemplate"},{"type":"doc","id":"variables/muteRoom","label":"muteRoom"},{"type":"doc","id":"variables/none","label":"none"},{"type":"doc","id":"variables/executeSwap","label":"executeSwap"},{"type":"doc","id":"variables/unfollowRoom","label":"unfollowRoom"},{"type":"doc","id":"variables/shouldUnmuteTemplate","label":"shouldUnmuteTemplate"},{"type":"doc","id":"variables/unmuteRoom","label":"unmuteRoom"},{"type":"doc","id":"variables/defaultActions","label":"defaultActions"},{"type":"doc","id":"variables/defaultCharacter","label":"defaultCharacter"},{"type":"doc","id":"variables/defaultEvaluators","label":"defaultEvaluators"},{"type":"doc","id":"variables/evaluationTemplate","label":"evaluationTemplate"},{"type":"doc","id":"variables/imageGenModels","label":"imageGenModels"},{"type":"doc","id":"variables/embeddingDimension","label":"embeddingDimension"},{"type":"doc","id":"variables/embeddingZeroVector","label":"embeddingZeroVector"},{"type":"doc","id":"variables/defaultProviders","label":"defaultProviders"},{"type":"doc","id":"variables/settings","label":"settings"},{"type":"doc","id":"variables/elizaLogger","label":"elizaLogger"},{"type":"doc","id":"variables/boredomProvider","label":"boredomProvider"},{"type":"doc","id":"variables/orderBookProvider","label":"orderBookProvider"},{"type":"doc","id":"variables/timeProvider","label":"timeProvider"},{"type":"doc","id":"variables/tokenProvider","label":"tokenProvider"},{"type":"doc","id":"variables/walletProvider","label":"walletProvider"}]},{"type":"category","label":"Functions","items":[{"type":"doc","id":"functions/generateImage","label":"generateImage"},{"type":"doc","id":"functions/generateCaption","label":"generateCaption"},{"type":"doc","id":"functions/isCreateAndBuyContent","label":"isCreateAndBuyContent"},{"type":"doc","id":"functions/createAndBuyToken","label":"createAndBuyToken"},{"type":"doc","id":"functions/buyToken","label":"buyToken"},{"type":"doc","id":"functions/sellToken","label":"sellToken"},{"type":"doc","id":"functions/loadActionConfigs","label":"loadActionConfigs"},{"type":"doc","id":"functions/loadCustomActions","label":"loadCustomActions"},{"type":"doc","id":"functions/initializeClients","label":"initializeClients"},{"type":"doc","id":"functions/parseArguments","label":"parseArguments"},{"type":"doc","id":"functions/loadCharacters","label":"loadCharacters"},{"type":"doc","id":"functions/getTokenForProvider","label":"getTokenForProvider"},{"type":"doc","id":"functions/initializeDatabase","label":"initializeDatabase"},{"type":"doc","id":"functions/createAgentRuntime","label":"createAgentRuntime"},{"type":"doc","id":"functions/createDirectRuntime","label":"createDirectRuntime"},{"type":"doc","id":"functions/startDiscord","label":"startDiscord"},{"type":"doc","id":"functions/startTelegram","label":"startTelegram"},{"type":"doc","id":"functions/startTwitter","label":"startTwitter"},{"type":"doc","id":"functions/composeActionExamples","label":"composeActionExamples"},{"type":"doc","id":"functions/formatActionNames","label":"formatActionNames"},{"type":"doc","id":"functions/formatActions","label":"formatActions"},{"type":"doc","id":"functions/composeContext","label":"composeContext"},{"type":"doc","id":"functions/addHeader","label":"addHeader"},{"type":"doc","id":"functions/embed","label":"embed"},{"type":"doc","id":"functions/retrieveCachedEmbedding","label":"retrieveCachedEmbedding"},{"type":"doc","id":"functions/formatEvaluatorNames","label":"formatEvaluatorNames"},{"type":"doc","id":"functions/formatEvaluators","label":"formatEvaluators"},{"type":"doc","id":"functions/formatEvaluatorExamples","label":"formatEvaluatorExamples"},{"type":"doc","id":"functions/formatEvaluatorExampleDescriptions","label":"formatEvaluatorExampleDescriptions"},{"type":"doc","id":"functions/generateText","label":"generateText"},{"type":"doc","id":"functions/trimTokens","label":"trimTokens"},{"type":"doc","id":"functions/generateShouldRespond","label":"generateShouldRespond"},{"type":"doc","id":"functions/splitChunks","label":"splitChunks"},{"type":"doc","id":"functions/generateTrueOrFalse","label":"generateTrueOrFalse"},{"type":"doc","id":"functions/generateTextArray","label":"generateTextArray"},{"type":"doc","id":"functions/generateObject","label":"generateObject"},{"type":"doc","id":"functions/generateObjectArray","label":"generateObjectArray"},{"type":"doc","id":"functions/generateMessageResponse","label":"generateMessageResponse"},{"type":"doc","id":"functions/getGoals","label":"getGoals"},{"type":"doc","id":"functions/formatGoalsAsString","label":"formatGoalsAsString"},{"type":"doc","id":"functions/updateGoal","label":"updateGoal"},{"type":"doc","id":"functions/createGoal","label":"createGoal"},{"type":"doc","id":"functions/getImageGenModel","label":"getImageGenModel"},{"type":"doc","id":"functions/getActorDetails","label":"getActorDetails"},{"type":"doc","id":"functions/formatActors","label":"formatActors"},{"type":"doc","id":"functions/formatMessages","label":"formatMessages"},{"type":"doc","id":"functions/formatTimestamp","label":"formatTimestamp"},{"type":"doc","id":"functions/getModel","label":"getModel"},{"type":"doc","id":"functions/getEndpoint","label":"getEndpoint"},{"type":"doc","id":"functions/formatPosts","label":"formatPosts"},{"type":"doc","id":"functions/getProviders","label":"getProviders"},{"type":"doc","id":"functions/createRelationship","label":"createRelationship"},{"type":"doc","id":"functions/getRelationship","label":"getRelationship"},{"type":"doc","id":"functions/getRelationships","label":"getRelationships"},{"type":"doc","id":"functions/formatRelationships","label":"formatRelationships"}]}]};
module.exports = typedocSidebar.items;