module.exports={
  data:{
    name: "uptime",
    description: "See how long have I been up since."
  },
  code: `
  $ephemeral
  I've been up since $parseMS[$uptime].
  `
} 
