module.exports = {
  type: "interactionCreate",
  code: `
  $if[$customID==fixed;
    $findChannel[query;true]
  ]`
}
