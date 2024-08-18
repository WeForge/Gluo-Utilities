module.exports={
  data:{
    "name": "bug-report",
    "description": "Found a bug? Report now!",
    "options": [
      {
        "type": 3,
        "name": "description",
        "description": "describe the bug you've spotted",
        "required": true
      },
      {
        "type": 3,
        "name": "severity",
        "description": "tell us how severe the bug is",
        "required": true,
        "choices": [
          {
            "value": "Low",
            "name": "the bug doesn't really affects functionality"
          },
          {
            "value": "Medium",
            "name": "the bug isn't much of a deal but can be a hassle if not fixed urgently"
          },
          {
            "value": "High",
            "name": "this bug needs immediate attention, it affects the functionality"
          }
        ]
      }
    ]
  },
  code: `$defer` +
  /* variables */ `
  $setGuildVar[a;$sum[$getGuildVar[a];1]] $c[increment id]
  $let[a;675316333780533268]` +
  /* report discussion creation */ `
  $let[b;$createChannel[$guildID;bug-$option[severity]-$getGuildVar[a];GuildText;Please wait, developers will take sometime to respond.;$getGuildVar[categoryID_in_which_reports_will_be_made]]]
  $setGuildVar[r;$get[b]]
  $!addChannelPerms[$get[b];$authorID;AddReactions;ViewChannel;SendMessages;EmbedLinks;AttachFiles;ReadMessageHistory]` +
  /* reply on executing command */ `
  $author[Kipteam;$userAvatar[$get[a];2048;webp]]
  $description[### Thank you, $userDisplayName[$authorID], for creating a report.
  > -# **Our developers** will be in contact with you shortly. In the meantime, please provide us with **additional details** on the bug in **<#$get[b]>** while you wait.]` +
  /* sending embed to the report discussion channel with log part two*/ `
  $sendMessage[$get[b];<@$authorID> $author[Kipteam;$userAvatar[$get[a];2048;webp]] $description[### Thanks for creating this bug report.
  > -# **Our developers** will contact you shortly. In the meantime, please give us **all the details** on the bug. You can also just provide answers to these questions:
  
  - How did you encounter this bug? Explain with steps.
  - What is your screen's size?
  - What browser do you use? Also provide it's version.
  - What OS do you use? Provide it's version.
  - Can you send screenshots, videos, etc.?]
  $addActionRow
$addButton[fixed;Bug is fixed;Primary;;false];false]` +
  /* log part one */ `
  $sendMessage[$getGuildVar[channelID_of_logs];New bug report is made at https://discord.com/channels/$guildID/$get[b]
  $title[$option[severity] severity bug] $description[Description of bug:\n> $cropText[$option[description];0;160;…]] $footer[Bug report created by $username[$authorID];$userAvatar[$authorID]]
  $addActionRow
  $addButton[fixed-$authorID;Bug is fixed;Danger;;false]
  ;false]` +
    /* log part 1.5
  $sendMessage[$getGlobalVar[channelID_of_public_log];New bug report is made!
  $title[$option[severity] severity bug] $description[Description of bug:\n> $option[description]] $footer[Bug report created by $username[$authorID];$userAvatar[$authorID]];false]
  ` +*/
    /* setup for logs part three */ `
  $setGlobalVar[rps-$getGuildVar[r];$option[severity]]
  $setGlobalVar[rpd-$getGuildVar[r];$option[description]]
 `
}
