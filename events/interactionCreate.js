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
const { Events, Collection, EmbedBuilder} = require('discord.js');
const delay = require(`delay`);
const config = process.env;
const startTime = Date.now();
const bannedUsers = [];
module.exports = {
	name: Events.InteractionCreate,
	once: false,
	async execute(interaction) {
    const command = interaction.client.commands.get(interaction.commandName);
    const Model = require('/home/runner/PublicBot/models/stats.js')

    if (config.botOn == "false") {
      if (command.data.name == "kod") {
        
      }else {
     
      const embedesss = new EmbedBuilder() 
      .setTitle(`Wystąpił błąd podczas wykonywania komendy!`)
      .setDescription(`Użyta komenda: **/${command.data.name}**\nBłąd: **Komendy bota wyłączone!**`)
      .setColor([255, 0,0])
  .setFooter({ text: 'Bot Kitki30'});
      interaction.reply({ embeds: [embedesss], ephemeral: true });
      return;}
    }
    if (bannedUsers.includes(interaction.user.id)) {
      const embedess = new EmbedBuilder()
      .setTitle(`Wystąpił błąd podczas wykonywania komendy!`)
      .setDescription(`Użyta komenda: **/${command.data.name}**\nBłąd: **Jesteś na blackliście bota!**`)
      .setColor([255, 0,0])
  .setFooter({ text: 'Bot Kitki30'});
      interaction.reply({ embeds: [embedess], ephemeral: true })
      return;
    }
   if (!interaction.isChatInputCommand()) return;
    
    if (!command) {

      return;
    }
    
    const { cooldowns } = interaction.client;

    if (!cooldowns.has(command.data.name)) {
      cooldowns.set(command.data.name, new Collection());
    }

    const now = Date.now();
    const timestamps = cooldowns.get(command.data.name);
    const defaultCooldownDuration = 5;
    const cooldownAmount = (command.cooldown ?? defaultCooldownDuration) * 1000;

    if (timestamps.has(interaction.user.id)) {
      const expirationTime = timestamps.get(interaction.user.id) + cooldownAmount;

      if (now < expirationTime) {
        const expiredTimestamp = Math.round(expirationTime / 1000);
        return interaction.reply({ content: ` Nie można użyć komendy ${command.data.name} Spróbuj później za <t:${expiredTimestamp}:R>.`, ephemeral: true });
      }

    }
    timestamps.set(interaction.user.id, now);
    setTimeout(() => timestamps.delete(interaction.user.id), cooldownAmount);
    try {
       await command.execute(interaction);
Model.findOneAndUpdate(
      { bot:"Bot" },
      { $inc: { totalbotuses: 1 } }, 
      { upsert: true, new: true } 
    ).catch(async(e)=>{
  console.log(e)
    });
      return;
      await command.execute(interaction);      interaction.reply("Bot wyłączony pisz do <@657229045624471556>")
     
    } catch (error) {
      let totalSeonds = (startTime - Date.now());
     let totalSeconds = (totalSeonds / 1000)      ;
      const millis = totalSeonds;
      const embedes = new EmbedBuilder()
      .setTitle(`Wystąpił błąd podczas wykonywania komendy!`)
      .setDescription(`Użyta komenda: **/${command.data.name}**`)
      .setColor([255, 0,0])
   .setFooter({ text: 'Bot Kitki30'});
      console.error(error);
      if (interaction.replied || interaction.deferred) {
        await interaction.followUp({ embeds: [embedes], ephemeral: true });
      } else {
        await interaction.reply({ embeds: [embedes], ephemeral: true });
      }
    }
	},
};