const { ForgeClient, LogPriority } = require("@tryforge/forgescript"); const { ForgeDB } = require("@tryforge/forge.db"); require('dotenv').config(); // loads stuff up
const client = new ForgeClient({intents: ["GuildMessages"], events: ["messageCreate", "interactionCreate"], prefixes: ["."],
                                logLevel: LogPriority.High, mobile: true, respondOnEdit: true, extensions: [new ForgeDB()]}); // initializing client and setting stuff up
client.commands.load('legacy');client.applicationCommands.load('app');client.login(process.env.TOKEN); // loading commands and logging into client
