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

module.exports = {
  data: new SlashCommandBuilder()
    .setName('help')
    .setDescription('Wyświetla wszystkie komendy.'),
  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
    const kody = ["100", "101", "102", "103", "200", "203", "202", "201", "204", "206", "207", "300", "301", "302", "303", "304", "305", "307", "308", "400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "420", "421", "422", "423", "424", "425", "426", "429", "431", "444", "450", "451", "497", "498", "499", "500", "501", "502", "503", "504", "506", "507", "508", "509", "510", "511", "521", "522", "523", "525", "599" ] ;
     const randomIndex = Math.floor(Math.random() * kody.length);
      const kod = kody[randomIndex];
    const embed = new EmbedBuilder()
      .setTitle(`Komendy Mechownika`)
      .setColor([0, 255, 0])
      .setDescription(`**ROZRYWKA**\n**/kod** - jeśli posiadasz kod wpisz go i zobacz co się stanie\n**/avatar** - kradnie awatar użytkownika\n**/httpcat** - wysyła zdjęcie kota zależnego od statusu HTTP jaki podasz np. ${kod}\n**/cat** - wysyła losowe zdjęcie kota\n**/dog** - wysyła losowe zdjęcie psa\n\n**INFORMACYJNE**\n**/help** - wyświetla komendy bota\n**/ping** - wyświetla opóźnienie bota\n**/uptime** - wyświetla czas pracy bota\n**/user-info** - informacje o użytkowniku\n\n**MODERACYJNE**\n**/kick** - wyrzuca użytkownika (Wymagana permisja do wyrzucania)\n**/ban** - Banuje użytkownika (Wymagana permisja do banowania)`)
        .setFooter({ text: config.botname})
    interaction.reply({ embeds: [embed] });
  },
};