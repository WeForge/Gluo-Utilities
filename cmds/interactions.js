/* logs part three */
module.exports = {
  type: "interactionCreate",
  code: `
  $if[$customID==fixed;
    $let[x;$findChannel[query;true]]
    $deleteChannels[x]
    $sendMessage[1248555821353402449;$title[$option[severity] severity bug is fixed] $description[Description of bug:\n> $option[description]] $footer[Bug report closed by $username[$authorID];$authorAvatar];false]
  ]`
}
