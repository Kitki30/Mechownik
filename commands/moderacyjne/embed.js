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
	
const { SlashCommandBuilder, EmbedBuilder, PermissionFlagsBits, Client,ChannelType } = require('discord.js');
const client = require("/home/runner/PublicBot/main.js");
module.exports = {
  data: new SlashCommandBuilder()
    .setName('embed')
    .setDescription('Wysyła embeda.')
    .addChannelOption(option =>
		option.setName('kanał')
			.setDescription('Kanał na który bot wyśle embeda.')
      .addChannelTypes(ChannelType.GuildText)
  .setRequired(true))
    
.addStringOption(option =>
		option.setName('tytuł')
			.setDescription('Tytuł embeda.')
  .setRequired(true))
       .addRoleOption(option =>
		option.setName('ping')
			.setDescription('Jaki ping dodać do embeda')
  .setRequired(true))
    .addStringOption(option =>
		option.setName('opis')
			.setDescription('opis embeda.')
      
  .setRequired(false))
 
.setDefaultMemberPermissions(PermissionFlagsBits.ManageMessages)
  .setDMPermission(false),
  async execute(interaction) {
    // interaction.user is the object representing the User who ran the command
    // interaction.member is the GuildMember object, which represents the user in the s

		


 await interaction.reply("Komenda dostępna tylko w <:beta_1:1161975823851585588><:beta_2:1161975884115365898>");
      
  },
};