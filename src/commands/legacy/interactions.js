module.exports={
  type: "interactionCreate",
  code: `
  $if[$customID==fixed;
  $deleteChannels[$channelID]
  $let[z;$replaceText[$replaceText[$replaceText[$getGuildVar[severity-$channelID];High;#FF0000];Medium;#FFA500];Low;#32CD32]]
  $sendMessage[$getGuildVar[channelID_of_logs];
  $title[$getGuildVar[severity-$channelID] severity bug has been resolved] 
  $description[Description of bug:\n> $cropText[$getGuildVar[description-$channelID];0;160;…]] $color[$get[z]]
  $addField[Category;$getGuildVar[category-$channelID]]
  $addField[Bug report closed by:;$username[$authorID]] $timestamp
  ;false]]
  $deleteGuildVar[category-$channelID] $deleteGuildVar[severity-$channelID] $deleteGuildVar[description-$channelID]
  `
}
