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
const { SlashCommandBuilder, EmbedBuilder, PermissionsBitField } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
    .setName('unmute')
    .setDMPermission(false)
    .setDescription('Usuwa wyciszenie określonego użytkownika na określony czas.')
    .addUserOption(option => option.setName('użytkownik').setDescription('Określ użytkownika, który ma zostać odciszony.').setRequired(true))
    .addStringOption(option => option.setName('powód').setDescription(`Podaj powód odciszenia użytkownika.`).setRequired(false)),
    async execute(interaction) {

        const użytkownik = interaction.options.getMember('użytkownik');
        const powód = interaction.options.getString('powód') || 'Nie podano powodu';
        const nazwaUżytkownika = interaction.options.getUser('użytkownik');

        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) return await interaction.reply({ content: 'Nie masz do tego uprawnień!', ephemeral: true});

        użytkownik.timeout(null).catch(err => {
            return interaction.reply({ content: `**Nie można** odciszyć tego użytkownika! Sprawdź pozycję mojej roli i spróbuj ponownie.`, ephemeral: true})
        })

        const dmembed = new EmbedBuilder()
        .setColor("#B7E5D5")
        .setTitle(`Odciszyliśmy cię na serwerze "${interaction.guild.name}"`)
        .addFields({ name: 'Serwer', value: `> ${interaction.guild.name}`, inline: true})
        .addFields({ name: 'Powód', value: `> ${powód}`, inline: true})
        .setFooter({ text: 'Bot mechownik'})
        .setTimestamp()

        const embed = new EmbedBuilder()
        .setColor("#B7E5D5")
        .setTitle(`Użytkownik został odciszony!`)
        .addFields({ name: 'Użytkownik', value: `> ${nazwaUżytkownika.tag}`, inline: true})
        .addFields({ name: 'Powód', value: `> ${powód}`, inline: true})
        .setFooter({ text: 'Bot mechownik'})

        await interaction.reply({ embeds: [embed] })
        await użytkownik.send({ embeds: [dmembed] }).catch(err => {
            return;
        })
    }
}
