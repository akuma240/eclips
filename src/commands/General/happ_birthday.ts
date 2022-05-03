import { MessageType } from '@adiwajshing/baileys'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import request from '../../lib/request'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
                        command: "happy_birthday",
                        aliases: ["hbd", "hhp"],
			description: "use for birthday wish",
			category: "general",
			usage: `${client.config.prefix}happy_birthday`,
			baseXp: 10,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
        if (M.quoted?.sender) M.mentioned.push(M.quoted.sender)
        const user = M.mentioned[0] ? M.mentioned[0] : M.sender.jid
        let username = user === M.sender.jid ? M.sender.username : ''
        if (!username) {
            const contact = this.client.getContact(user)
            username = contact.notify || contact.vname || contact.name || user.split('@')[0]
        }
        let pfp: string
        try {
            pfp = await this.client.getProfilePicture(user)
        } catch (err) {
            M.reply(`Profile Picture not Accessible of ${username}`)
            pfp =
                'https://www.linkpicture.com/q/789_2.jpg'
        }
        await M.reply(
            await request.buffer(
                pfp ||
                    'https://wallpaperaccess.com/full/5304840.png'
            ),
            MessageType.image,
            undefined,
            undefined,
            `HAPPY BIRTHDAY MY FRIEND, I WISH YOU A VERY LONG HAPPY LIFE-ET.GLITCH*@${user.split('@')[0]}*\n\n`
        )
    }
}
