const { ForgeClient, LogPriority } = require("@tryforge/forgescript");
const { QuorielDB } = require("@quoriel/db");
const a = new ForgeClient({
  intents: ["GuildMessages"],
  events: ["messageCreate", "interactionCreate"],
  prefixes: ["."],
  logLevel: LogPriority.High,
  mobile: true,
  respondOnEdit: true,
  extensions: [new QuorielDB()],
});
module.exports = a;
