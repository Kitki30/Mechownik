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

module.exports = {
  data: new SlashCommandBuilder()
    .setName('warn')
    .setDescription('Daje ostrzeżeie użytkownikowi.')
    .addUserOption(option =>
      option
        .setName('user')
        .setDescription('Użytkownik do ostrzeżenia')
        .setRequired(true))
    .setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
  .setDMPermission(false),
  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
   const target = interaction.options.getMember('user');
    const userid = target.id;
    const guidid = target.guild.id;
    const Model = require('/home/runner/PublicBot/models/warns.js')
Model.findOneAndUpdate(
      { userId: userid, guildId: guidid },
      { $inc: { warns: 1 } }, // Inkrementuj wartość pola 'warns' o 1
      { upsert: true, new: true } // Opcja 'upsert' spowoduje utworzenie nowego dokumentu, jeśli nie istnieje
    )
    .then(async (doc) => {
      const embed = new EmbedBuilder()
        .setColor("#EDC4BC")
        .setTitle(`Nadano ostrzeżenie użytkownikowi!`)
        .addFields({ name: 'Użytkownik', value: `${target.displayName}`, inline: true })
        .addFields({ name: 'Warny', value: `${doc.warns}`, inline: true })
        .setFooter({ text: 'Bot mechownik' })
        .setTimestamp();

      interaction.reply({ embeds: [embed] });
    })
    .catch((error) => {
      console.log(error);
      const embed = new EmbedBuilder()
        .setColor([255, 0, 0])
        .setTitle(`Błąd!`)
        .setDescription(`Błąd przy dawaniu ostrzeżenia!`)
        .setFooter({ text: 'Bot mechownik' })
        .setTimestamp();

      interaction.reply({ embeds: [embed] });
    });
   





                     
    
  },
};