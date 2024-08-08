const { ForgeClient } = require("@tryforge/forgescript")
const { ForgeDB } = require("@tryforge/forge.db")
   
// Client initialization
   const client = new ForgeClient({
    "intents": [
        "Guilds",
        "GuildMembers",
        "GuildModeration",
        "GuildEmojisAndStickers",
        "GuildIntegrations",
        "GuildWebhooks",
        "GuildInvites",
        "GuildVoiceStates",
        "GuildPresences",
        "GuildMessages",
        "GuildMessageReactions",
        "GuildMessageTyping",
        "DirectMessages",
        "DirectMessageReactions",
        "DirectMessageTyping",
        "MessageContent",
        "GuildScheduledEvents",
        "AutoModerationConfiguration",
        "AutoModerationExecution"
    ],
    "prefixes": [
        "?"
    ],
    "events": [
        "voiceStateUpdate",
        "userUpdate",
        "typingStart",
        "threadUpdate",
        "threadMemberUpdate",
        "threadDelete",
        "threadCreate",
        "stickerUpdate",
        "stickerDelete",
        "stickerCreate",
        "stageInstanceUpdate",
        "stageInstanceDelete",
        "stageInstanceCreate",
        "shardResume",
        "shardReconnecting",
        "shardReady",
        "shardError",
        "shardDisconnect",
        "roleUpdate",
        "roleDelete",
        "roleCreate",
        "ready",
        "presenceUpdate",
        "messageUpdate",
        "messageReactionRemoveEmoji",
        "messageReactionRemoveAll",
        "messageReactionRemove",
        "messageReactionAdd",
        "messageDeleteBulk",
        "messageDelete",
        "messageCreate",
        "inviteDelete",
        "inviteCreate",
        "interactionCreate",
        "guildUpdate",
        "guildUnavailable",
        "guildScheduledEventUserRemove",
        "guildScheduledEventUserAdd",
        "guildScheduledEventUpdate",
        "guildScheduledEventDelete",
        "guildScheduledEventCreate",
        "guildMemberUpdate",
        "guildMemberRemove",
        "guildMemberAvailable",
        "guildMemberAdd",
        "guildDelete",
        "guildCreate",
        "guildBanRemove",
        "guildBanAdd",
        "guildAvailable",
        "guildAuditLogEntryCreate",
        "error",
        "emojiUpdate",
        "emojiDelete",
        "emojiCreate",
        "debug",
        "channelUpdate",
        "channelPinsUpdate",
        "channelDelete",
        "channelCreate",
        "autoModerationActionExecution"
    ],
    "extensions": [
        new ForgeDB()
    ]
})
   
// Load the commands
   client.commands.load("cmds")
   client.applicationCommands.load("sls")
   
// Your bot token
   client.login("Your bot token here");
