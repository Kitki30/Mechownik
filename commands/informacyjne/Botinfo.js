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
let start =Date.now();
module.exports = {
  data: new SlashCommandBuilder()
    .setName('bot-info')
    .setDescription('Informacje o bocie.'),
  async execute(interaction) {
     
    
    let totalSeonds = (Date.now() - start);
 let totalSeconds = (totalSeonds / 1000)      ;
let days = Math.floor(totalSeconds / 86400);
totalSeconds %= 86400; 
let hours = Math.floor(totalSeconds / 3600);
totalSeconds %= 3600;
let minutes = Math.floor(totalSeconds / 60);
let seconds = Math.floor(totalSeconds % 60);
  const used = Math.round(process.memoryUsage().rss / (1024 * 1024)) //w megabajtach
    let uzyciecpu;
    
const os = require('os');

function getCpuUsage() {
  const cpuInfo = os.cpus();
  let totalIdle = 0;
  let totalTick = 0;

  cpuInfo.forEach(cpu => {
    for (let type in cpu.times) {
      totalTick += cpu.times[type];
    }
    totalIdle += cpu.times.idle;
  });

  return ((1 - totalIdle / totalTick) * 100).toFixed(2);
}

const mesg = await interaction.reply({ content:"Ładowanie...", fetchReply: true } )

const embed = new EmbedBuilder() 

  
           .setTitle(`Informacje o bocie`)
           
           
           .setColor([0,255,0])
           .setDescription(`**Podstawowe Informacje:**\n> Nazwa użytkownika: **${interaction.client.user.tag}**\n> Bot?: **Tak**\n> ID: **${interaction.client.user.id}**\n\n**Status:**\n> Ping: ${mesg.createdTimestamp - interaction.createdTimestamp}ms\n> Czas Pracy: ${days}d ${hours}h ${minutes}m ${seconds}s\n> Ram: ${used} MB/1024 MB\n> Użycie CPU: ${getCpuUsage()}%`)
 
          .setFooter({ text: 'Bot mechownik'});
       interaction.editReply({ content:"",embeds: [embed] }); 

    
  },
};