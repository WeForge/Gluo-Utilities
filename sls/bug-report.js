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
            "value": "low",
            "name": "the bug doesn't really affects functionality"
          },
          {
            "value": "medium",
            "name": "the bug isn't much of a deal but can be a hassle if not fixed urgently"
          },
          {
            "value": "high",
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
  $let[b;$createChannel[$guildID;bug-$option[severity]-$getGuildVar[a];GuildText;Please wait, developers will take sometime to respond.;1271418909140062281]]` +
  /* reply on executing command */ `
  $author[Kipteam;$userAvatar[$get[a];2048;webp]]
  $description[### Thank you, $userDisplayName[$authorID], for creating a report.
  > -# **Our developers** will be in contact with you shortly. In the meantime, please provide us with **additional details** on the bug in **<#$get[b]>** while you wait.]` +
  /* sending embed to the report discussion channel */ `
  $sendMessage[$get[b];<@$authorID> $author[Kipteam;$userAvatar[$get[a];2048;webp]] $description[### Thanks for creating this bug report.
  > -# *Our developers* will contact you shortly. In the meantime, please give us **all the details** on the bug. You can also just provide answers to these questions:
  - How did you encounter this bug? Explain with steps.
  - What is your screen's size?
  - What browser do you use? Also provide it's version.
  - What OS do you use? Provide it's version.
  - Can you send screenshots, videos, etc.?
  ];false]`
}
