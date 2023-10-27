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

module.exports = {
  data: new SlashCommandBuilder()
    .setName('httpcat')
    .setDescription('Wysyła zdjęcie kota zależnego od statusu HTTP jaki podasz.')
    .addStringOption(option =>
		option.setName('status')
			.setDescription('Tu wpisz status HTTP np.404.')),
  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the specific guild
  const prop = interaction.options.getString('status');
    const kody = ["100", "101", "102", "103", "200", "203", "202", "201", "204", "206", "207", "300", "301", "302", "303", "304", "305", "307", "308", "400", "401", "402", "403", "404", "405", "406", "407", "408", "409", "410", "411", "412", "413", "414", "415", "416", "417", "418", "420", "421", "422", "423", "424", "425", "426", "429", "431", "444", "450", "451", "497", "498", "499", "500", "501", "502", "503", "504", "506", "507", "508", "509", "510", "511", "521", "522", "523", "525", "599" ] ;
    let httpcat = `https://http.cat/${prop}.jpg`;
    
    if (!kody.includes(prop)){ 
     await interaction.reply({ content: 'Nie ma takiego kodu HTTP!', ephemeral: true });
    return;}
    const embed = new EmbedBuilder()
      
      .setColor([0, 255, 0])
      .setImage(httpcat)
        .setFooter({ text: 'Bot mechownik'})
    interaction.reply({ embeds: [embed] });
    console.log('Użyto komendy /httpcat');
  },
};