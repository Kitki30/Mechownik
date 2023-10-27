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
const start = Date.now()
const express = require("express");
const app = express();
const fs = require('node:fs');
const botname="Bot Mechownik";
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, Partials, EmbedBuilder} = require('discord.js');
require('dotenv').config();
require('colors');
console.log(`[Information]`.blue);
console.log(`[Name] ${botname}`.green);
console.log(`[Version] v3(Music update)`.yellow);
console.log(`[Author] Kitki30`.blue)
console.log(`[Info] Made on discord.js v14`.yellow)
console.log(`[Info] Copyright (c) 2023 Kitki30\n\n[Info] Logs will be displayed here:`.blue);
//let ratelimited=false;
// ratelimited = true; // Tryb ratelimitu
//ratelimited=false; //Wyłącz tryb ratelimitu
/*if(ratelimited=true){
  console.log(`[Ratelimits] Ratelimit mode turned on!`.yellow)
  console.log('[Information] Goodbye :)'.green)
  console.log(`[Process] Exit`.red); 
  process.exit();}*/

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildVoiceStates, 
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions,
    GatewayIntentBits.DirectMessageTyping,
    GatewayIntentBits.DirectMessageReactions,
  ],
  partials: [
    Partials.Channel,
    Partials.Message
  ]
});


console.log(`[Bot Runner] Running script.`.yellow);
console.log(`[FASTSTART] Fast start enabled.`.green);
client.cooldowns = new Collection();
client.commands = new Collection();


// Event handler start
const eventsPath = path.join(__dirname, 'events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));

for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
client.on("debug", ( e ) => console.log(e));
	const event = require(filePath);
	if (event.once) {
		client.once(event.name, (...args) => event.execute(...args));
	} else {
		client.on(event.name, (...args) => event.execute(...args));
	}
}
client.rest.on('rateLimited', (e)  =>{
               console.log(`[REST] Ratelimited:(`)});

// Event handler end
console.log(`\n[Commands] Loading commands.`.blue);
  const foldersPath = path.join(__dirname, 'commands');
  const commandFolders = fs.readdirSync(foldersPath);
let totalcommand=0;
  for (const folder of commandFolders) {
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const command = require(filePath);
      // Set a new item in the Collection with the key as the command name and the value as the exported module
      if ('data' in command && 'execute' in command) {
totalcommand++;
console.log(`[Commands] Command loaded "${command.data.name}"`.green);
        client.commands.set(command.data.name, command);
      } else {
        console.log(`[Commands] unable to load command.`.yellow);
      }
    }
  }
console.log(`[Commands] Loaded ${totalcommand} commands`.blue); 
  const { REST, Routes } = require('discord.js');
  require('dotenv').config();
console.log(`\n[Commands] Registering commands.`.blue); 
  const commands = [];
let totalcommandreg=0;
  for (const folder of commandFolders) {
    // Grab all the command files from the commands directory you created earlier
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    // Grab the SlashCommandBuilder#toJSON() output of each command's data for deployment
    
    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const command = require(filePath);
      if ('data' in command && 'execute' in command) {
        totalcommandreg++;
console.log(`[Commands] Command registered "${command.data.name}"`.green);commands.push(command.data.toJSON());
      } else {
        console.log(`[Commands] unable to load command.`.yellow);
      }
    }
  }
console.log(`[Commands] Registered ${totalcommandreg} commands`.blue);
const delay = require(`delay`);
  // Construct and prepare an instance of the REST module
  
client.login(process.env.TOKEN)
  
    
    
        .catch((e) => {
    console.error('Kitki30 Error Handler!\nError logining\n', e);
});
      
      const mongoose = require('mongoose');
      

mongoose.connect(process.env.MONGODBURL,{ useUnifiedTopology: true, useNewUrlParser: true });
      const stop = Date.now();
    console.log(`[Client] Time Taken to start Client = ${(stop - start)/1000} seconds`.green);  
try {
      app.listen(8080);
      app.listen(80);

        const port = process.env.PORT;

  app.get('/', async ({ query }, response) => {
	

	return response.sendFile('public/index.html', { root: '.' });
});
const Topgg = require("@top-gg/sdk")

const webhook = new Topgg.Webhook(process.env.topgg)

app.post("/topgg/vote", webhook.listener(async vote => {
  // vote
  console.log(vote.user);
  let user = vote.user;
  let userobject = await client.users.fetch(user);
    
   
      let votechannel=await client.channels.fetch('1167080670498131969');
      
        const embed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Top.gg')
	
	.setDescription(`Użytkownik ${userobject.displayName} zagłosował na bota na top.gg!\nNaciśnij przycisk na dole i zagłosuj!`);
	votechannel.send({embeds:[embed]});
        const embeddm= new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Top.gg')
	
	.setDescription(`Dziękuje za zagłosowanie na bota w top.gg!😸`);
        userobject.send({embeds:[embeddm]});
      
}))
}
      catch(er){
        console.log(er);
      }

    
  // and deploy your commands!
  (async () => {
    try {
      console.log(`[Rest] Setting rest token`.yellow)
      const rest = new REST().setToken(process.env.TOKEN);
     console.log(`[Rest] Rest token set`.green); 
      
      
      
      // The put method is used to fully refresh all commands in the guild with the current set
console.log(`[Rest] Puting commands.`.yellow);
      const data = await rest.put(
        Routes.applicationCommands(process.env.CLIENTID),
        { body: commands },
      );
      console.log(`[Rest] Commands putted`);
      
      
       

      
      
    } catch (error) {
      // And of course, make sure you catch and log any errors!
      console.error(error);
    }
  });

// Webhook options can be found here if you wish to include them, currently the only one is an error callback: https://topgg.js.org/interfaces/webhookoptions
// You'll have to set up a webhook on top.gg in your bot's settings

  
    // get the user from their user id, then send a DM


process.on('unhandledRejection', (reason, promise) => {
    console.error("[ANTI-CRASH] An error has occured and been successfully handled: [unhandledRejection]".red);
    console.error(promise, reason);
});

process.on("uncaughtException", (err, origin) => {
    console.error("[ANTI-CRASH] An error has occured and been successfully handled: [uncaughtException]".red);
    console.error(err, origin);
});
  
  