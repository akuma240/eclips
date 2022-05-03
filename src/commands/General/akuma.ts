import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'zhongli',
            description: 'Displays info about zhongli.',
            category: 'general',
            usage: `${client.config.prefix}savage`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://c.tenor.com/M25TmVGyi0QAAAPo/zhongling.mp4'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: ` *𝗭𝗛𝗢𝗡𝗚𝗟𝗜* \n\n *Description: A Mysterious Expert Contracted By The Wangsheng Funeral Parlor.Extremely Knowledgeable In All Things.
            
🍀OWNER WHATSAPP;
Wa.me/+919567506478;
⪼TAKE CARE TRAVELLER` }
        )
    }
}
