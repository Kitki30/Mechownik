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
const { Events,ButtonBuilder, ActionRowBuilder, EmbedBuilder, ButtonStyle} = require('discord.js');
const delay = require(`delay`);

module.exports = {
	name: Events.MessageCreate,
	once: false,
	async execute(message) {
    if(message.channel.id == '1163105932541165660') {
  const client = message.client
  let guilds = client.guilds.cache;
 guilds.forEach(async (guild) => {
    const guildId = guild.id;

    // Check if the guild ID exists in the MongoDB database
    const guildCollection = require('/home/runner/PublicBot/models/botupdatechannel.js')
    guildCollection.findOne({ guild:guildId}).then((document) => {
    if (document) {
      const channelId = document.channel; // Replace 'channelId' with the actual field name in your schema
    
const channel = client.channels.cache.get(channelId);
if (channel) {
  channel.send({content:message.content, embeds:message.embeds});
} 


    } 
    });

    
  }); 
  message.react("👍");
} 
    if (message.author.bot) return;
    if (message.partial) return message.reply('**Witaj,**\nJestem Mechownik!\nWpisz komende /help aby wyświetlić dostępne komendy!');
    if (message.guildId== '1160918483291357298') {
      

      

    if(message.channel.id == '1161008804125749420') {
        //added this
        

        const suggestEmbed = new EmbedBuilder()
            .setColor('#FEE75C')
            .setTitle(`Propozycja`)
          
   
            .setAuthor({name:message.member.displayName
                
            })
          .setDescription(message.content)
            .setTimestamp()
            .setFooter({text:
                 'Bot mechownik - Propozycje'}
                
            );
        
        //changed this
        const ok =await message.channel.send({embeds: [suggestEmbed]})
            ok.react("👍")
            ok.react("👎")
            ok.startThread({
                name: `Propozycja-${message.member.displayName}`,
                autoArchiveDuration: 60,
                type: 'GUILD_PUBLIC_THREAD'});
message.delete()
      console.log(`part1`);
      if (message.member.roles.cache.has("1160922877441343508")) {
        console.log(`part2`);
      } else{
        message.delete()
        console.log(`part3`);
      }
    } 
      if (message.content == '<@1101105727340286022>') return message.reply('**Bot Mechownik**\nAby zobaczyć dostępne komendy użyj:\n/help');
      if (message.content=="*222123"){
      
      if (message.author.id==`657229045624471556`){
const confirm = new ButtonBuilder()
			.setCustomId('weryfikacja')
			.setLabel('✅ Zweryfikuj się')
			.setStyle(ButtonStyle.Success);
        const row = new ActionRowBuilder()
			.addComponents(confirm);
        const embed = new EmbedBuilder() 

  
           .setTitle(`Regulamin serwera.`)
           
          .setDescription(`**Zasady Ogólne Serwera:**

**1.** Administracja ma prawo dać karę bez powodu. 
**2.** Administracja daje kary w wysokości zależnej od liczby ostrzeżeń(ostrzeżenie=warn) użytkownika. 
**3.** Zachowuj się dobrze. 
**4.** Za złamanie regulaminu zostanie zastosowana kara w wysokości ostrzeżenie lub wyciszenia(tylko przy mocniejszym złamaniu regulaminu). 
**5.** Nie znajomość regulaminu nie zwalnia cię z nie przestrzegania jego. 
**6.** Weryfikując się akceptujesz nasz regulamin serwera.
**7.** Obowiązuje zakaz multikont.
**8.** Konta ze złymi nazwami będą karane w postaci pseudonimu "Zmień nick".
**9.** Gdy potrzebujesz pomocy należy wysłać ping moderatora jeśli to nie pomoże utwórz ticket.
**10.** Zostaniesz poinformowany w postaci pingu @everyone gdy regulamin zostanie zmieniony.

**Zasady Kanałów Tekstowych:**

**1.** Obowiązuję zakaz przekleństw(gdy są nadmiernie używane).
**2.** Obowiązuje zakaz spamu.
**3.** Pinguj tylko aktywnych moderatorów. 
**4.** Zakaz pingu moderatorów gdy pomoc jest nie potrzebna. 
**5.** Używaj komend tylko na kanale <#1160923272867750018>.
**6.** Nadmierne używanie pingów wiąże się z otrzymaniem kary.
**7.** Pisz tylko w języku polskim.
**8.** Obowiązuje całkowity zakaz treści NSFW.

**Zasady kanałów głosowych:**

**1.** Przeklinanie jest jeśli nie jest ono na czacie kanału głosowego.
**2.** Zakaz wchodzenia i wychodzenia aby zdenerwować osoby na kanale głosowym.

**Zasady korzystania z botów:**

**1.** Nie używaj botów w złym celu. 
**2.** Nie używaj komend botów na innych kanałach niż <#1160923272867750018>. 
**3.** Nie próbuj używać komend do których nie masz dostępu.

**Zasady korzystania z systemu ticketów:**

**1.** Otwarcie ticketu bez powodu wiąże się z otrzymaniem kary w postaci ostrzeżenia.
**2.** Możesz otworzyć jeden ticket na raz. 
**3.** Zapytaj się moderatorów przed otworzeniem ticketu.

**Zasady propozycji**
**1.** Kopiowanie pomysłów innych wiąże się z otrzymaniem blokady na tworzenie propozycji.
**2.** Przed utworzeniem propozycji sprawdź czy ktoś już nie utworzył podobnej. 
**3.** Propozycję można wstawić co 1 dzień. 
**4.** Zostaniesz poinformowany gdy propozycja zostanie zaakceptowana lub odrzucona przez prywatną wiadomość discord. 

**Zasady programu szukania błędów w bocie mechownik:**

**1.** Nie kopiuj innych.
**2.** Zostaniesz poinformowany przez discord gdy błąd zostanie: odrzucony, zaakceptowany lub naprawiony.
**3.** Poważniejsze błedy proszę zgłaszać na systemie ticketów.
**4.** Program dotyczy tylko bota <@1101105727340286022>.
**5.** Zostaniesz nagrodzony rangą gdy zgłoszony błąd będzie zaakceptowany.

Regulamin edytowany 09.10.2023 przez <@657229045624471556>`)
           .setColor([0,255,0])
           	
          .setFooter('Bot mechownik - Regulamin')
        
	 message.channel.send({
			embeds: [embed]
			
		});
}
      message.delete()
    }
   } 
	},
};