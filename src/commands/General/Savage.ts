import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'akuma',
            description: 'Displays info about akuma.',
            category: 'general',
            usage: `${client.config.prefix}savage`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://i.ibb.co/fCg5nzQ/IMG-20220407-WA0369.jpg'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `🔥𝗵𝗲𝗹𝗹𝗼!🍃I'm akuma an ordinary person who loves watching anime.
            
🔥𝙒𝙝𝙖𝙩𝙨𝘼𝙥𝙥;
Wa.me/+917892202052

🔥𝙁𝘼𝘾𝙀𝘽𝙊𝙊𝙆;
https://facebook.com/groups/600441174428472/


⪼𝖲𝖾𝖾 𝗒𝖺𝗁 💘` }
        )
    }
}
