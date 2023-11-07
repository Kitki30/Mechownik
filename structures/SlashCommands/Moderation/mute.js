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
var config = require('../../config.js');
module.exports = {
    data: new SlashCommandBuilder()
    .setName('mute')
    .setDescription('Wycisza użytkownika.')
    .setDMPermission(false)
    .addUserOption(option => option.setName('użytkownik').setDescription('Wybierz użytkownika, który zostanie wyciszony.').setRequired(true))
    .addStringOption(option => option.setName('czas').setDescription(`Czas wyciszenia w formacie "1h 2m 3s".`).setRequired(true))
    .addStringOption(option => option.setName('powód').setDescription(`Podaj powód wyciszenia użytkownika.`).setRequired(false)),
    async execute(interaction) {
      const użytkownik = interaction.options.getMember('użytkownik');
await interaction.guild.members.ban(użytkownik);
        if (!interaction.member.permissions.has(PermissionsBitField.Flags.ModerateMembers)) return await interaction.reply({ content: 'Nie masz uprawnień do tego!', ephemeral: true});

        const czas = interaction.options.getString('czas');
        const user = interaction.options.getMember('użytkownik');
        const username = interaction.options.getUser('użytkownik');
        let time = parseTime(czas);
        const reason = interaction.options.getString('powód') || 'Nie podano powodu';

        if (username.id === interaction.user.id) return await interaction.reply({ content: `Nie możesz wyciszyć sam siebie!`, ephemeral: true})

        if (time < 6000) {
            return await interaction.reply({ content: `Czas wyciszenia nie może być krótszy niż 6 sekund.`, ephemeral: true})
        }

        if (time > 2073600000) {
            return await interaction.reply({ content: `Czas wyciszenia nie może być dłuższy niż 24 dni.`, ephemeral: true})
        }

        const dmembed = new EmbedBuilder()
        .setColor("#EDC4BC")
        .setTitle(`Zostałeś wyciszony na serwerze "${interaction.guild.name}"`)
        .addFields({ name: 'Serwer', value: `> ${interaction.guild.name}`, inline: true})
        .addFields({ name: 'Powód', value: `> ${reason}`, inline: true})
        .addFields({ name: 'Czas', value: `> ${czas}`, inline: true})
                  .setFooter({ text: config.botname})
        .setTimestamp()

        const embed = new EmbedBuilder()
        .setColor("#EDC4BC")
        .setTitle(`Użytkownik został wyciszony!`)
        .addFields({ name: 'Użytkownik', value: `> ${username.tag}`, inline: true})
        .addFields({ name: 'Powód', value: `> ${reason}`, inline: true})
        .addFields({ name: 'Czas', value: `> ${czas}`, inline: true})
                  .setFooter({ text: config.botname})
        .setTimestamp()

        user.timeout(time).catch(err => {
            return interaction.reply({ content: `Nie można wyciszyć tego użytkownika! Sprawdź pozycję mojej roli i spróbuj ponownie.`, ephemeral: true})
        })

        await interaction.reply({ embeds: [embed] })
        await user.send({ embeds: [dmembed] }).catch(err => {
            return;
        })
    }
}


function parseTime(czas) {
    const regexCzas = /(\d+d)?\s?(\d+h)?\s?(\d+m)?\s?(\d+s)?/i;
    const dopasowanie = czas.match(regexCzas);
    if (dopasowanie) {
        const dni = parseInt(dopasowanie[1]) || 0;
        const godziny = parseInt(dopasowanie[2]) || 0;
        const minuty = parseInt(dopasowanie[3]) || 0;
        const sekundy = parseInt(dopasowanie[4]) || 0;
        return ((dni * 24 + godziny) * 3600 + minuty * 60 + sekundy) * 1000;
    }
    return 0;
}