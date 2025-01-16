/* Importing packages */
const dotenv = require("dotenv");dotenv.config();const { ForgeClient } = require("@tryforge/forgescript");const { ForgeDB } = require("@tryforge/forge.db");const { ForgeQuirks } = require("forge.quirks");
/* Client intialization */
const client = new ForgeClient({
  "extensions": [new ForgeDB(),new ForgeQuirks()],
  "intents": ["Guilds","GuildMembers","MessageContent"],
  "events": ["interactionCreate","messageCreate"]
})
/* Load commands */
client.commands.load("cmds");
client.applicationCommands.load("sls");
/* Login to client */
client.login(process.env.BOT_TOKEN);
