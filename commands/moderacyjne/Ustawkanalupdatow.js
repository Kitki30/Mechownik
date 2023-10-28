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

const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits } = require('discord.js');
var config = require('../../config.js');
module.exports = {
  data: new SlashCommandBuilder()
    .setName('set-update-channel')
    .setDescription('Ustawia kanał do wysyłania aktualizacji bota.')
    .addChannelOption(option =>
		option.setName('kanał')
			.setDescription('Kanał do wysyłania aktualizacji bota.')
        .setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
  .setDMPermission(false),
  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
   const target = interaction.options.getChannel('kanał');
    const Model= require('/home/runner/PublicBot/models/botupdatechannel.js')
Model.findOneAndUpdate(
      { guild: interaction.guild.id},
      { guild:interaction.guild.id,channel:target.id}, // Inkrementuj wartość pola 'warns' o 1
      { upsert: true, new: true } // Opcja 'upsert' spowoduje utworzenie nowego dokumentu, jeśli nie istnieje
    )
    .then(async (doc) => {
      const embed = new EmbedBuilder()
        .setColor("#EDC4BC")
        .setTitle(`Ustawiono!`)
        .addFields({ name: 'Ustawienie', value: `Kanał Wysyłania Aktualizacji Bota`, inline: true })
        
        .setFooter({ text: config.botname})
        .setTimestamp();

      interaction.reply({ embeds: [embed] });
    })
    .catch((error) => {
      console.log(error);
      const embed = new EmbedBuilder()
        .setColor([255, 0, 0])
        .setTitle(`Błąd!`)
        
        .setFooter({ text: config.botname})
        .setTimestamp();

      interaction.reply({ embeds: [embed] });
    });
   





                     
    
  },
};