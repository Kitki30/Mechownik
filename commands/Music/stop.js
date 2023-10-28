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
var config = require('../../config.js');
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
const delay = require(`delay`);
module.exports = {
  data: new SlashCommandBuilder()
    .setName('stop')
    .setDescription('Wyłącza muzyke. '), 
  async execute(interaction) {
  const { createAudioPlayer, NoSubscriberBehavior } = require('@discordjs/voice');

const player = createAudioPlayer({
	behaviors: {
		noSubscriber: NoSubscriberBehavior.Pause,
	},
});
const { getVoiceConnection } = require('@discordjs/voice');

if (interaction.member.voice.channelId == null){
  const embed = new EmbedBuilder() 

  
           .setTitle(`Błąd.`)
           
          .setDescription(`Najpierw dołącz do kanału głosowego.`)
           .setColor([255,0,0])
           	
          .setFooter({ text: config.botname})
        
  interaction.reply({embeds:[embed]})
  
      await delay(10000);
      interaction.deleteReply()
return}

    const conn = getVoiceConnection(interaction.member.guild.id)
if(conn){
  
  conn.destroy() 
  interaction.reply('Zastopowano! ') 
  
      await delay(10000);
      interaction.deleteReply()
  return;}
else{
  interaction.reply("Bot nie jest połączony! ")
  
      await delay(10000);
      interaction.deleteReply()
  return;}

    
    

  },
};