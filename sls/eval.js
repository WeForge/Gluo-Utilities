module.exports={
  data:{
    "name": "evaluation",
    "description": "evaluates the code provided - for authorized personnel only",
    "options": [{
      "type": 3,
      "name": "code",
      "description": "the code to execute",
      "required": true
    }]
  },
  code:`
  $ephemeral
  $onlyForUsers[Sorry but only authorized personnel can use this command :/;976413539076026388;1177953362717704232;675316333780533268]
  $eval[$option[code]]`
}
