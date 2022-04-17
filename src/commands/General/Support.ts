import { MessageType, Mimetype } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'support',
            aliases: ['support'],
            description: 'Gets the support group links',
            category: 'general',
            usage: `${client.config.prefix}Support`,
            baseXp: 10
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        (await this.client.sendMessage(
        M.sender.jid,
        `    🔥MY MASTER GROUPS🔥
        
       *🔥𝐍𝐀𝐓𝐒𝐔 ꜱᴜᴘᴘᴏʀᴛ:🔥* *https://chat.whatsapp.com/IhQHex7AahB64RBZ20bbvb:*
        *🔥ꜱᴜᴘᴘᴏʀᴛ🔥* My Instagram 🎉:*https://www.instagram.com/akuma__24/?hl=en*`,
           MessageType.text
        ))
        const n = [
            'https://telegra.ph/file/4b83e7424a8182285d13e.mp4'
        ]
        let beckylynch = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url:beckylynch }, MessageType.video, {quoted:M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `Sent you the support Link in personal message \n` }
        )

        }
}
