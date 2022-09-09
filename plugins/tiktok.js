let handler = async(m,{text, conn}) => {
if (!text) throw 'masukkan link nya'
let p = await require('caliph-api').downloader.tiktok(text)
let nih = ` *TIKTOK DOWNLOADER BY CHONIX*

 *Title:* ${p.title}
 *Author:* ${p.author}
`
    conn.sendMessage(m.chat, { video: { url: p.nowm }, caption: nih }, { quoted: m })   
}
handler.help = ['tiktok'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^(tiktok|ttk)$/i

handler.limit = true

module.exports = handler
