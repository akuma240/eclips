import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
                        command: "alive",
                        aliases: ["Jinda?", "oi", "kahaho"],
			description: "Generally used to check if bot is Up",
			category: "general",
			usage: `${client.config.prefix}alive`,
			baseXp: 10,
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/a64ab58f3ea0b826d0545.mp4'
        ]
        let chitoge = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: chitoge }, MessageType.video, {
            mimetype: Mimetype.gif,
            caption: ` 𝐎𝐢𝐢🔥 𝐎𝐢𝐢🔥 𝐎𝐢𝐢 , 𝐁𝐚𝐤𝐤𝐚🐉, \n\n 𝐈'𝐦 𝐚𝐥𝐰𝐚𝐲𝐬 𝐚𝐜𝐭𝐢𝐯𝐞 🔥. 🔥 \n` }
        )
    }
}
   
