import { MessageType, Mimetype } from '@adiwajshing/baileys'
import { join } from 'path'
import MessageHandler from '../../Handlers/MessageHandler'
import BaseCommand from '../../lib/BaseCommand'
import WAClient from '../../lib/WAClient'
import { ISimplifiedMessage } from '../../typings'

export default class Command extends BaseCommand {
    constructor(client: WAClient, handler: MessageHandler) {
        super(client, handler, {
            command: '',
        })
    }

    run = async (M: ISimplifiedMessage): Promise<void> => {
        const n = [
            'https://telegra.ph/file/ce81baf0f6a4d26484dc8.mp4'
        ]
        let lucy = n[Math.floor(Math.random() * n.length)]
        return void this.client.sendMessage(M.from, { url: lucy }, MessageType.video, {
            quoted: M.WAMessage,
            mimetype: Mimetype.gif,
            caption: `𝘾𝙊𝙈𝙀 𝙊𝙉𝙉 🔥🔥 *${M.sender.username}!* 𝘼𝙉𝘿 𝙐𝙎𝙀 🔥*${this.client.config.prefix}help*? \n` }
        )
    }
}
          
       


    
        
           
           
            
            
        
    

    
        
           
           
           
   
