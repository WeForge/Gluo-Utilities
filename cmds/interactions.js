module.exports={type: "interactionCreate",code: `$if[$customID==fixed;
$deleteChannels[$findChannel[query;true]]$sendMessage[$getGuildVar[channelID_of_logs];
$title[$getGlobalVar[rps-$getGuildVar[$getGuildVar[a]-$authorID]] severity bug is fixed] 
$description[Description of bug:\n> $cropText[$getGlobalVar[rpd-$getGuildVar[$getGuildVar[a]-$authorID]];0;160;…]]
$footer[Bug report closed by $username[$authorID];$userAvatar[$authorID]]
;false]] `}
/* $if[$customID==bug-$getGuildVar[a]-$authorID;
$editMessage[$channelID;$messageID;$title[$getGlobalVar[rps-$getGuildVar[r;$guildID]] severity bug is fixed]
$description[Description of bug:\n> $cropText[$getGlobalVar[rpd-$getGuildVar[r;$guildID]];0;160;…]]
$footer[Bug report closed by $username[$authorID];$userAvatar[$authorID]]];$ephemeral Sorry, but only the person who reported this bug can mark it as fixed.]*/
