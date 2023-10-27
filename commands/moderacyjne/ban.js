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
    .setName('ban')
    .setDescription('Banuje użytkownika.')
    .addUserOption(option =>
			option
				.setName('user')
				.setDescription('Użytkownik do zbanowania')
				.setRequired(true))
		.addStringOption(option =>
			option
				.setName('powód')
				.setDescription('Powód bana.'))
    .setDefaultMemberPermissions(PermissionFlagsBits.BanMembers)
  .setDMPermission(false),
  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
   const target = interaction.options.getUser('user');
		const reason = interaction.options.getString('powód') ?? 'Nie podano powodu';

		
		await interaction.guild.members.ban(target);

    const embed = new EmbedBuilder()
      .setTitle(`Zbanowano ${target.tag} powód: ${reason}`)
      .setColor([255, 0,0])
        .setFooter({ text: 'Bot mechownik'})
    interaction.reply({ embeds: [embed] });
    
    console.log('Użyto komendy /ban');
  },
};