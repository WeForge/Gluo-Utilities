const{ForgeClient,LogPriority}=require("@tryforge/forgescript"),{QuorielDB}=require("@quoriel/db");
const a=new ForgeClient({
  intents:["GuildMessages"],
  events:["messageCreate","interactionCreate"],
  prefixes:["."],
  logLevel:LogPriority.High,
  mobile:1,
  respondOnEdit:1,
  extensions:[new QuorielDB()]});
module.exports = a;
