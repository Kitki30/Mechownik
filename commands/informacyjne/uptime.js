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
const { SlashCommandBuilder, EmbedBuilder, client, GatewayIntentBits } = require('discord.js');let start = Date.now();
module.exports = {

  data: new SlashCommandBuilder()
   
    .setName('uptime')
    .setDescription('Wyświetla czas pracy bota.'),

  async execute(interaction, client) {
 await interaction.reply("Obliczanie...") 
let totalSeonds = (Date.now() - start);
 let totalSeconds = (totalSeonds / 1000)      ;
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400; 
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
    const embed = new EmbedBuilder()
      .setTitle(`Czas pracy bota(Uptime): ${days}d ${hours}h ${minutes}m ${seconds}s`)
      .setColor([0, 255, 0])
      
        .setFooter({ text: 'Bot mechownik'})
    interaction.editReply({content:"", embeds: [embed] });
    console.log('Użyto komendy /uptime');
  },
};