/**
* MIT License
*
* Copyright (c) 2023 Kitki30
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy
* of this software and associated documentation files (the "Software"), to deal
* in the Software without restriction, including without limitation the rights
* to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
* copies of the Software, and to permit persons to whom the Software is
* furnished to do so, subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all
* copies or substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
* AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
* LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
* OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
* SOFTWARE.
*/
const { Events, Collection, Client ,EmbedBuilder} = require('discord.js');
const delay = require(`delay`);



  



module.exports = {
	name: Events.MessageDelete,
	once: false,
	async execute(message) {
    const client = message.client
    client.snipes = new Collection();
  if (message.guidId === '1133310081321156618') {
    // Handle the event when a message from the specified ID is deleted
    // You can choose not to show the deleted message here
    if (message.author?.id === '1159573175475114015') {
    // Handle the event when a message from the specified ID is deleted
    // You can choose not to show the deleted message here
  }

    else if (message.mentions.members.size > 0) {
      
      const embed = new EmbedBuilder() 

  
           .setTitle(`Wykryto ghostping`)
           
           
           .setColor([255,0,0])
           	.addFields(
		{ name: 'Ghostpingowany:', value: "<@"+message.mentions.users.first().id+">"},
		
	
		{ name: 'Ghostpingował', value: "<@"+message.author+">" },
	)
          .setFooter({ text: 'Bot mechownik'})
        message.channel.send({ embeds: [embed] }); 
    
    // You can handle the ghost ping detection here, such as sending a warning or logging it.
    }
   let snipes = client.snipes.get(message.channelId) || [];
  
    if (snipes.length > 1) snipes = snipes.slice(0,4);
  
  
  snipes.unshift({
    msg: message,
    image: message.attachments.first()?.proxyURL || null,
    time: Date.now(),
    id: message.channelId,
    
  });
    
  
  client.snipes.set(message.channelId, snipes);
    
  }
  
	},
};