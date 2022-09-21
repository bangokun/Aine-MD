const hikki = require('hikki-me')
let handler = async(m, {conn, text, args, usedPrefix, command }) => {
let a = await hikki.anime.randomHentai()
let rand = a[Math.floor(Math.random() * a.length)]
conn.sendFile(m.chat, rand, '', m)
}
handler.help = ['henimg']
handler.tags = ['hentai']
handler.command = /^henimg$/i
handler.limit = true

module.exports = handler
