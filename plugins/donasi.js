let handler = async m => m.reply(`
╭═┅═「 Donasi • Pulsa/Dana 」
┝IM3   [085738639969]
┝OVO  [085738639969]
╰═┅═━═┅═━═┅═━––––––
`.trim())
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
