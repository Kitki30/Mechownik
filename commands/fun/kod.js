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
const delay = require(`delay`);
const config = process.env;
module.exports = {
  data: new SlashCommandBuilder()
    .setName('kod')
    .setDescription('Jeśli masz kod wpisz go i zobacz co się stanie!')
    .addStringOption(option =>
		option.setName('kod')
			.setDescription('Tu wpisz kod.')),
  async execute(interaction) {
  const prop = interaction.options.getString('kod');
    
        
      
    
    if (config.botOn == "true") {
      if (prop == "skibididom") {
          let 
      embed = new EmbedBuilder()
      .setTitle("Skibididom")
      .setColor([0, 255, 0])
      .setImage("https://media.tenor.com/3-M2qYsowhYAAAAd/dom-dom-yes-yes-fat.gif");
      
    interaction.reply({ embeds: [embed] });
        await delay(15000);
        embed = new EmbedBuilder()
      .setTitle("Dziękujemy za korzystanie z bota!")
      .setColor([0, 255, 0])
          interaction.editReply({ embeds: [embed] });
        return;
       
      }
    if (prop == "zgerypala"){
      try{
      let 
      embed = new EmbedBuilder()
      .setTitle("Zgerypała")
      .setColor([0, 255, 0])
      .setImage("https://pbs.twimg.com/media/FtSCW7uWcAAs1rU.png")
      
    interaction.reply({ embeds: [embed] });
        await delay(1000);
      embed = new EmbedBuilder()
      .setTitle("Z maty kolejna")
      .setColor([0, 255, 0])
      .setImage("https://pbs.twimg.com/media/FtSCW7uWcAAs1rU.png");
      
    interaction.editReply({ embeds: [embed] });
 await delay(1000);
       embed = new EmbedBuilder()
      .setTitle("Kurcze no wszystko się chrzani")
      .setColor([0, 255, 0])
      .setImage("https://pbs.twimg.com/media/FtSCW7uWcAAs1rU.png")
       await delay(1500);
    interaction.editReply({ embeds: [embed] });
      await delay();
      embed = new EmbedBuilder()
      .setTitle("Chciałbym przynajmniej skończyć te liceum na miernych ocenach")
      .setColor([0, 255, 0])
      .setImage("https://pbs.twimg.com/media/FtSCW7uWcAAs1rU.png")
      
    interaction.editReply({ embeds: [embed] });
      await delay(7500);
      embed = new EmbedBuilder()
      .setTitle("Dziękujemy za korzystanie z bota!")
      .setColor([0, 255, 0])     
    interaction.editReply({ embeds: [embed] });
              return;}catch(e){console.log(e); return;}
    }
     let embedErr = new EmbedBuilder()
      .setColor([255, 0, 0])
       .setTitle("Nie ma takiego kodu!")
.setFooter({ text: config.botname})
    interaction.reply({ embeds: [embedErr] });
    return;}}
  },
};