import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: 'GLITCH',
            description: 'Displays info about zhongli.',
            category: 'general',
            usage: `${client.config.prefix}savage`
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://media.giphy.com/media/JIFbUpGLZEQk2yo9ZK/giphy-downsized-large.gif'
        ]
        let rin = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: rin }, MessageType.image, {quoted:M.WAMessage,
            mimetype: Mimetype.jpeg,
            caption: `HELLO EVERYONE I'M ET.GLITCH. I'M THE OWNER OF THE BOT ZHONGLI, SO IF YOU NEED ANY HELP REALTED TO THE BOT YOU CAN MSG ME DIRECTLY OR JOIN MY SUPPORT GRP` }
        )
    }
}
