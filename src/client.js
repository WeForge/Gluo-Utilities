const{ForgeClient,LogPriority}=require("@tryforge/forgescript");const{ForgeDB}=require("@tryforge/forge.db");
const agg=new ForgeClient({
  intents:["GuildMessages"],
  events:["messageCreate","interactionCreate"],
  prefixes:["."],
  logLevel:LogPriority.High,
  mobile:1,
  respondOnEdit:1,
  extensions:[new ForgeDB()]});
module.exports = agg;
