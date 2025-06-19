/*loading stuff up*/const { ForgeClient, LogPriority } = require("@tryforge/forgescript"); const { ForgeDB } = require("@tryforge/forge.db"); require('dotenv').config();
/*initializing and setting up client*/const client = new ForgeClient({intents: ["GuildMessages"], events: ["messageCreate", "interactionCreate"], prefixes: ["."], logLevel: LogPriority.High, allowBots: false, mobile: true, respondOnEdit: true, extensions: [new ForgeDB()]});
/*loading stuff ane logging into client*/client.commands.load('legacy');client.applicationCommands.load('app');client.login(process.env.TOKEN);
