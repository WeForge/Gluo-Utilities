/*loading stuff up*/const { ForgeClient, LogPriority } = require("@tryforge/forgescript"); const { QuorielDB } = require("@quoriel/db");
/*initializing and setting up client*/const client = new ForgeClient({intents: ["GuildMessages"], events: ["messageCreate", "interactionCreate"], prefixes: ["."], logLevel: LogPriority.High, allowBots: true, mobile: true, respondOnEdit: true, extensions: [new QuorielDB]});
/*loading stuff ane logging into client*/client.commands.load('legacy');client.applicationCommands.load('app');client.login(process.env.TOKEN);
