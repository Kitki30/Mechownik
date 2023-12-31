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
    .setName('warns')
    .setDescription('Pokazuje ostrzeżenia.')
    .addUserOption(option =>
      option
        .setName('user')
        .setDescription('Użytkownik do sprawdenia')
        .setRequired(false))
    
  .setDMPermission(false),
  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
   await interaction.reply("**Szukanie użytkownika w bazie danych**")
    
   let target = interaction.options.getMember('user');
     let userid;
      let guidid;
    if (target==null){
      guidid=interaction.guild.id
      userid=interaction.user.id
      target=interaction.member
    }else{
      userid = target.id;
      guidid = target.guild.id;
    }
 
    const Model = require('../models/warns.js')
    Model.findOne({ userId: userid, guildId: guidid })
      .then(async (doc) => {
        if (!doc) {
          await interaction.editReply("**Brak wpisu w bazie danych. Tworzenie...**")
          // Jeśli dokument nie istnieje, utwórz nowy
          doc = new Model({ userId: userid, guildId: guidid, warns: 0 });
        }

        // Zapisz dokument
        await doc.save();

        const embed = new EmbedBuilder()
          .setColor("#EDC4BC")
          .setTitle(`Ostrzeżenia`)
          .addFields({ name: 'Użytkownik', value: `${target.displayName}`, inline: true })
          .addFields({ name: 'Ostrzeżenia', value: `${doc.warns}`, inline: true })
          .setFooter({ text: config.botname})
          .setTimestamp();

       await interaction.editReply({ content:"", embeds: [embed] });
      })
      .catch(async (error) => {
        console.log(error);
        const embed = new EmbedBuilder()
          .setColor([255, 0, 0])
          .setTitle(`Błąd!`)
          .setDescription(`Błąd przy pokazywaniu ostrzeżeń!`)
          .setFooter({ text: config.botname})
          .setTimestamp();

        await interaction.editReply({content:"", embeds: [embed] });
      });
  },
};