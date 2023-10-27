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
const { SlashCommandBuilder, EmbedBuilder} = require('discord.js');
const { ButtonBuilder, ButtonStyle } = require('discord.js')
const { ActionRowBuilder} = require('discord.js');
const delay = require(`delay`);
module.exports = {
  data: new SlashCommandBuilder()
    .setName('play')
    .setDescription('Puszcza muzyke. ')
  
		.addStringOption(option =>
			option
				.setName('film')
				.setDescription('Nazwa filmu na yt')
      .setRequired(true)), 
    
  async execute(interaction) {
  const { createAudioPlayer, NoSubscriberBehavior } = require('@discordjs/voice');
		const reason = interaction.options.getString('film');
await interaction.reply("Oczekiwanie na odpowiedź! ")

const { getVoiceConnection } = require('@discordjs/voice');

if (interaction.member.voice.channelId == null){
  const embed = new EmbedBuilder() 

  
           .setTitle(`Błąd.`)
           
          .setDescription(`Najpierw dołącz do kanału głosowego.`)
           .setColor([255,0,0])
           	
          .setFooter({ text: 'Bot mechownik'})
        
  interaction.editReply({content:"", embeds:[embed]})
  
      await delay(10000);
      interaction.deleteReply()
return}

    const conn = getVoiceConnection(interaction.member.guild.id)
if (conn) {
  const embeed = new EmbedBuilder() 

  
           .setTitle(`Błąd, bot już połączony.`)
           
          .setDescription(`Bot już połączony!\nPoczekaj aż bot skończy grać lub wpisz /stop.`)
           .setColor([255,0,0])
           	
          .setFooter({ text: 'Bot mechownik'})
  interaction.editReply({content:"", embeds:[embeed]})
      await delay(10000);
      interaction.deleteReply()      
   
  return;
}
 await interaction.editReply("Szukanie...")   
// Play "track.mp3" across two voice connections

  



const play = require('play-dl'); // Everything
  const searched = await play.search(reason, { limit : 1 })
  const confirm = new ButtonBuilder()
			.setCustomId('confirm')
			.setLabel('Puść')
			.setStyle(ButtonStyle.Success);

		const cancel = new ButtonBuilder()
			.setCustomId('cancel')
			.setLabel('Nie')
			.setStyle(ButtonStyle.Danger) ;
  const row = new ActionRowBuilder()
			.addComponents(cancel, confirm);
      const embed = new EmbedBuilder() 

  
           .setTitle(`Puścić muzykę?`)
           
          .setDescription(`Bot wejdzie na kanał i puści **${searched[0].title}**.`)
           .setColor([255,255,0])
           	
          .setFooter({ text: 'Bot mechownik'})
        
	const response =	await interaction.editReply({
    content:"", 
			embeds: [embed],
			components: [row],
		});
  const collectorFilter = i => i.user.id === interaction.user.id;
try {
	const confirmation = await response.awaitMessageComponent({ filter: collectorFilter, time: 60_000 });

	if (confirmation.customId === 'confirm') {
    await confirmation.update({embeds:[], content:"Dołączanie..."})
    const { joinVoiceChannel, AudioPlayerStatus} = require('@discordjs/voice');
const connection1 = joinVoiceChannel({
	channelId: interaction.member.voice.channelId,
	guildId: interaction.member.guild.id,
	adapterCreator: interaction. member.guild.voiceAdapterCreator,
});
    interaction.reply({embeds:[], content:"Przygotowywanie..."})
    const voicec =interaction.member.voice.channelId;
const stream = await play.stream(searched[0].url)
  const { createAudioResource, VoiceConnectionStatus} = require('@discordjs/voice');
  let resource = createAudioResource(stream.stream, {
            inputType: stream.type
        })

        let player = createAudioPlayer({
            behaviors: {
                noSubscriber: NoSubscriberBehavior.Pause
            }
        })

           
  
   
player.play(resource);
  connection1.subscribe(player)
    const embedsyy = new EmbedBuilder() 

  
           .setTitle(`Gram **${searched[0].title}**.`)
           .setColor([0,255,0])
           	
          .setFooter({ text: 'Bot mechownik'})
        
interaction.editReply({ content:"", embeds:[embedsyy] , components: [] }); 
let VC = await interaction.client.channels.cache.get(voicec);
if(!VC){
  interaction.editReply("Błąd");
  return;
}
let inter =setInterval(async() => {
  connection1.on(VoiceConnectionStatus.Destroyed, () => {
	return;
});
  if(connection1){
    MemberCount = VC.members.size;
    //Might need members.cache.size;
    if(MemberCount == 1){ //Only the bot in vc
        connection1.destroy()
         interaction.editReply({ embeds:[], content: `Zakończono granie muzyki.`, components: [] }); 
      clearInterval(inter); 
      await delay(10000);
      interaction.deleteReply()
      return;
    }}
}, 5000);    player.on(AudioPlayerStatus.Idle, async () => {
  connection1.on(VoiceConnectionStatus.Destroyed, () => {
	return;
});
  if (connection1){
	connection1.destroy();
      interaction.editReply({ embeds:[], content: `Zakończono granie muzyki.`, components: [] }); 
      await delay(10000);
      interaction.deleteReply()
  return;}
});
    
	} else if (confirmation.customId === 'cancel') {
    const embedi= new EmbedBuilder() 

  
           .setTitle(`Anulowano! `)
           
          
           .setColor([255,0,0])
           	
          .setFooter({ text: 'Bot mechownik'})
        
		await confirmation.update({ embeds:[embedi] , components: [] });
    
      await delay(10000);
      interaction.deleteReply()
    return;
	}
} catch (e) {
  const embeds = new EmbedBuilder() 

  
           .setTitle(`Anulowano. `)
           
          .setDescription(`Anulowano. Przez brak wyboru w minute.`)
           .setColor([255,0,0])
           	
          .setFooter({ text: 'Bot mechownik'})
        
	await interaction.editReply({ embeds:[embeds] , components: [] });
  
      await delay(10000);
      interaction.deleteReply()
  console.log(e);
  return;
}
	


  },
};