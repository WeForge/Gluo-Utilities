module.exports={data:{"name":"bug-report","description":"Found a bug? Report now!","options":[{"type":3,"name":"description","description":"Describe the bug you've spotted","required":true},{"type":3,"name":"severity","description":"Tell us how severe the bug is","required":true,"choices":[{"value":"Low","name":"The bug doesn't really affects functionality"},{"value":"Medium","name":"The bug isn't much of a deal but can be a hassle if not fixed urgently"},{"value":"High","name":"This bug needs immediate attention, it affects the functionality"}]}]},code:`$defer $setGuildVar[a;$sum[$getGuildVar[a];1]]$let[a;675316333780533268] $let[b;$createChannel[$guildID;bug-$option[severity]-$getGuildVar[a];GuildText;Please wait, developers will take sometime to respond.;1271418909140062281]]$!addChannelPerms[$get[b];$authorID;AddReactions;ViewChannel;SendMessages;EmbedLinks;AttachFiles;ReadMessageHistory] $author[Kipteam;$userAvatar[$get[a];2048;webp]] $description[### Thank you, $userDisplayName[$authorID], for creating a report.\n> -# **Our developers** will be in contact with you shortly. In the meantime, please provide us with **additional details** on the bug in **<#$get[b]>** while you wait.] $sendMessage[$get[b];<@$authorID> $author[Kipteam;$userAvatar[$get[a];2048;webp]] $description[### Thanks for creating this bug report.\n> -# **Our developers** will contact you shortly. In the meantime, please give us **all the details** on the bug. You can also just provide answers to these questions:\n- How did you encounter this bug? Explain with steps.\n- What is your screen's size?\n- What browser do you use? Also provide it's version.\n- What OS do you use? Provide it's version.\n- Can you send screenshots, videos, etc.?]\n$addActionRow\n$addButton[fixed;Bug is fixed;Primary;;false];false] $sendMessage[1248555821353402449;New bug report is made! $title[$option[severity] severity bug] $description[Description of bug:\n> $option[description]] $footer[Bug report created by $username[$authorID];$userAvatar[$authorID]];false]`}
