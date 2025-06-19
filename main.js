const { ForgeClient, LogPriority } = require("@tryforge/forgescript"); const { QuorielDB } = require("@quoriel/db"); require('dotenv').config(); // loads stuff up
const client = new ForgeClient({intents: ["GuildMessages"], events: ["messageCreate", "interactionCreate"], prefixes: ["."],
                                logLevel: LogPriority.High, mobile: true, respondOnEdit: true, extensions: [new QuorielDB()]}); // initializing client and setting stuff up
client.commands.load('legacy');client.applicationCommands.load('app');client.login(process.env.TOKEN); // loading commands and logging into client
