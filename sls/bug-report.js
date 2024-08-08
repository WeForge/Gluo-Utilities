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
            "name": "low",
            "value": "the bug doesn't really affects functionality"
          },
          {
            "name": "medium",
            "value": "the bug isn't much of a deal but can be a hassle if not fixed urgently"
          },
          {
            "name": "high",
            "value": "this bug needs immediate attention, it affects the functionality"
          }
        ]
      }
    ]
  },
  code: `$c[response to the command]
  $defer
  $ephemeral
  $author[Kipteam;$userAvatar[675316333780533268;2048;webp]]
  $description[$displayName[$authorID], thanks for reporting the bug, developers will soon contact you about more details on the bug you've encountered. Please be patient.]
  ` // gonna add create the channel next
}
