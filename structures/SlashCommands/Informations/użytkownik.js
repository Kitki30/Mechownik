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
const { SlashCommandBuilder, EmbedBuilder } = require('discord.js');
var config = require('../../config.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('user-info')
    .setDescription('Informacje o użytkowniku.')
  .addUserOption(option => 		option.setName('user') 			.setDescription('Wybierz użytkownika.') 			.setRequired(true)),
  async execute(interaction) {
  const target = interaction.options.getMember('user');  // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    const isBot = target.user.bot;
    let bot;
    if (isBot == true) {
      bot = `Tak`
    }
    else {
      bot = `Nie`
    }
    let mutedhehe = 'Nie';
    if (target.isCommunicationDisabled()){
      mutedhehe = 'Tak'
    }
    let avatar = await target.user.avatarURL();
const embed = new EmbedBuilder() 

  
           .setTitle(`Informacje o ${target.displayName}`)
           
           
           .setColor([0,255,0])
           .setDescription(`Nazwa użytkownika: **${target.displayName}**\nBot?: **${bot}**\nID: **${target.user.id}**\nWyciszony?: ${mutedhehe}`)
 .setAuthor({ name: 'Informacje o '+target.displayName, iconURL: avatar}) 	.setThumbnail(avatar)
          .setFooter({ text: config.botname})
       interaction.reply({ embeds: [embed] }); 

    
  },
};