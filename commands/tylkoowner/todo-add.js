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
    .setName('todo-add')
    .setDescription('Add something to todo.md')
    
		.addStringOption(option =>
			option
				.setName('todo')
				.setDescription('Add something to list.'))

  .setDMPermission(true),
  async execute(interaction) {
if (interaction.user.id =="1167508158642651146"){
		const reason = interaction.options.getString('todo');
var fs = require('fs')
fs.appendFile('todo.md', `[Pending] ${reason}`, async function (err) {
  if (err) {
    const embed = new EmbedBuilder()
      .setTitle(`Failed to write file\n${err} `)
      .setColor([255, 0, 0])
           .setFooter({ text: 'Bot mechownik'})
    interaction.reply({ embeds: [embed] });
  } else {
    const embed = new EmbedBuilder()
      .setTitle(`Added to list`)
      .setColor([255, 0, 0])
           .setFooter({ text: 'Bot mechownik'})
    const embeds= new EmbedBuilder()
      .setTitle(`Added to todo list\n[Pending] ${reason}`)
      .setColor([255, 0, 0])
           .setFooter({ text: 'Bot mechownik'})
    

const channel = await interaction.client.channels.fetch('1163105932541165660')
channel.send({embeds:[embeds]})
    interaction.reply({ embeds: [embed] }); 
  }
})
	


    
    }else{
  interaction.reply("Brak uprawnień")
    }
    
  },
};