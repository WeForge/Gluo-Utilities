module.exports={
  data:{
    "name": "bug-report",
    "description": "Found a bug? Report now!",
    "options": [
      {
        "type": 3,
        "name": "description",
        "description": "Detailed description of the bug",
        "required": true
      },
      {
        "type": 3,
        "name": "severity",
        "description": "Impact level of the bug",
        "required": true,
        "choices": [
          {
            "value": "High",
            "name": "High: Critical functionality impaired"
          },
          {
            "value": "Medium",
            "name": "Medium: Moderate impact on user experience"
          },
          {
            "value": "Low",
            "name": "Low: Minimal disruption"
            } 
        ]
      },
      {
        "type": 3,
        "name": "category",
        "description": "The Gluo project you want to make a report about.",
        "required": true,
        "choices": [
          {
            "value": "Web",
            "name": "The Gluo web app"
          },
          {
            "value": "App",
            "name": "The Gluo native app for andorid"
          },
          {
            "value": "App 2",
            "name": "The new Gluo app"
          },
          {
            "value": "Api-4",
            "name": "The older Gluo api"
          },
          {
            "value": "Api-5",
            "name": "The newer Gluo api"
          },
          {
            "value":"Unknown",
            "name":"i don't know what i'm doing :/"
          }
          ]
      }
    ]
  },
  code: `

  $let[b;$createChannel[$guildID;$option[category]-$option[severity]-$getGuildVar[a];GuildText;Bug reporter:$username[$authorID]\nSeverity:$option[severity];$getGuildVar[categoryID_in_which_reports_will_be_made]]]
$let[z;$replaceText[$replaceText[$replaceText[$option[severity];High;#FF0000];Medium;#FFA500];Low;#32CD32]]
 

  $interactionReply[$ephemeral ### ✅ ¦ Bug report created\nYour bug report has been created in <#$get[b]>. Our development team will review it shortly.] 

  $!addChannelPerms[$get[b];$authorID;AddReactions;ViewChannel;SendMessages;EmbedLinks;AttachFiles;ReadMessageHistory] 
  $sendMessage[$get[b];<@$authorID>
 $title[🐞 ¦ $option[category] Bug report initiated]
 $description[### Bug report details
> -# Please help us understand the issue by providing the following information:
        
        - Steps to reproduce the bug
        - Screen resolution
        - Browser and version
        - Operating system and version
        - Screenshots or screen recordings (if possible)
      ]
$color[$get[z]]
  $addActionRow
  $addButton[fixed;Mark as resolved;Success;;false];false]
  $sendMessage[$getGuildVar[channelID_of_logs];New bug report is made at https://discord.com/channels/$guildID/$get[b]
  $title[$option[severity] severity bug has been reported] $description[Description of bug:\n> $cropText[$option[description];0;160;…]] $addField[Category:;$option[category];true] $addField[Bug report created by:;$username[$authorID];true] $color[$get[z]]  $timestamp]

  $setGuildVar[severity-$get[b];$option[severity]]
  $setGuildVar[category-$get[b];$option[category]]
  $setGuildVar[description-$get[b];$option[description]]
  $setGuildVar[a;$sum[$getGuildVar[a];1]]
  `
}
