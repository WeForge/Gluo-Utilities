/*loading stuff up*/const { ForgeClient, LogPriority } = require("@tryforge/forgescript");
/*initializing and setting up client*/const client = new ForgeClient({intents: ["GuildMessages"], events: ["messageCreate", "interactionCreate"], prefixes: ["."], logLevel: LogPriority.High, allowBots: true, mobile: true, respondOnEdit: true});
/*loading stuff ane logging into client*/client.commands.load('legacy');client.applicationCommands.load('app');client.login(process.env.TOKEN);
