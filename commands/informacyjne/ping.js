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
    .setName('ping')
    .setDescription('Odpowiada z pong!'),
  async execute(interaction) {
     const embed = new EmbedBuilder()
      .setTitle(`Liczenie pingu proszę czekać! `)
      .setColor([255, 0, 0])
        .setFooter({ text: 'Bot mechownik'})
  
    const mesg = await interaction.reply({ embeds: [embed], fetchReply: true });
 const embedd = new EmbedBuilder()
      .setTitle(`Pong! Opóźnienie bota:${mesg.createdTimestamp - interaction.createdTimestamp}ms`)
      .setColor([0, 255, 0])
        .setFooter({ text: 'Bot mechownik'})
    await interaction.editReply({ embeds: [embedd] });
    console.log(`Użyto komendy /ping Ping bota: ${mesg.createdTimestamp - interaction.createdTimestamp}ms`);
  },
};