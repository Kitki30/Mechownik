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




   if (interaction.isChatInputCommand()) return;
    if (interaction.isButton()){
       if(interaction.customId == "weryfikacja") {

        const guild = interaction.client.guilds.cache.get("1160918483291357298")
         if (interaction.member.roles.cache.has("1160922877441343508")) {
                      const oneem = new EmbedBuilder()
      .setTitle(`Weryfikacja`)
      .setColor([255, 0, 0])
      .setDescription(`Już się zweryfikowałeś!`)
      .setFooter({ text: 'Bot Mechownik - Weryfikacja'});
            interaction.reply({ embeds:[oneem], ephemeral: true })
           return;
         }
         let roless = guild.roles.cache.get("1160922877441343508");
  let rolss = guild.roles.cache.get("1161525335381266533");
 interaction.member.roles.remove(rolss);       interaction.member.roles.add(roless);
           const embedees = new EmbedBuilder()
      .setTitle(`Weryfikacja`)
      .setColor([0, 255, 0])
      .setDescription(`Zweryfikowałeś się!`)
      .setFooter({ text: 'Bot Mechownik - Weryfikacja'});
         interaction.reply({ embeds:[embedees], ephemeral: true })
         return;
       }else {
         return;
       }
     }else {
       return;
    } 

  },
};