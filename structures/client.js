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
const { Riffy } = require("riffy");
var config = require('./config.js');
var lang = config.consoletranslation;
const start = Date.now()
const ut=require("kitki30-tools");
const express = require("express");
const app = express();
const fs = require('node:fs');
const path = require('node:path');
const { Client, Collection, Events, GatewayIntentBits, Partials, EmbedBuilder} = require('discord.js');
require('dotenv').config();
require('colors');
console.log(`[${lang.informations}]`.blue);
console.log(`[${lang.name}] Mechownik`.green);
console.log(`[${lang.version}] v4(Open Source update)`.yellow);
console.log(`[${lang.author}] Kitki30`.blue)
console.log(`[${lang.info}] ${lang.madeondjs}`.yellow)
console.log(`[${lang.info}] Copyright (c) 2023 Kitki30\n\n[${lang.info}] ${lang.logstext} `.blue);
const nodes = [
    {
        host: process.env.lava,
        password: process.env.lavapass,
        port: process.env.lavaport,
        secure: false
    },
];



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



client.cooldowns = new Collection();
client.commands = new Collection();


// Event handler start
const eventsPath = path.join(__dirname, 'Events');
const eventFiles = fs.readdirSync(eventsPath).filter(file => file.endsWith('.js'));
console.log(`[${lang.events}] ${lang.eventhandler}`.blue);
for (const file of eventFiles) {
	const filePath = path.join(eventsPath, file);
	const event = require(filePath);
	if (event.once) {
    console.log(`[${lang.events}] ${lang.eventload} ${event.name}${lang.eventonce}`.green)
		client.once(event.name, (...args) => event.execute(...args));
	} else {
console.log(`[${lang.events}] ${lang.eventload} ${event.name}`.green)
		client.on(event.name, (...args) => event.execute(...args));
	}
}


// Event handler end
console.log(`\n[${lang.commands}] ${lang.loadingcommands}`.blue);
  const foldersPath = path.join(__dirname, 'SlashCommands');
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
console.log(`[${lang.commands}] ${lang.commandload} "${command.data.name}"`.green);
        client.commands.set(command.data.name, command);
      } else {
        console.log(`[${lang.commands}] ${lang.commandloaderr}`.yellow);
      }
    }
  }
console.log(`[${lang.commands}] ${lang.commandcounterA} ${totalcommand} ${lang.commandcounterB}`.blue); 
   
const delay = require(`delay`);
  // Construct and prepare an instance of the REST module
  
client.login(process.env.TOKEN)
  
    
    
      client.riffy = new Riffy(client, nodes, {
    send: (payload) => {
        const guild = client.guilds.cache.get(payload.d.guild_id);
        if (guild) guild.shard.send(payload);
    },
    defaultSearchPlatform: "spsearch",
    restVersion: "v4" // or v3 based on your lavalink version
});client.riffy = new Riffy(client, nodes, {
    send: (payload) => {
        const guild = client.guilds.cache.get(payload.d.guild_id);
        if (guild) guild.shard.send(payload);
    },
    defaultSearchPlatform: "spsearch",
    restVersion: "v4" // or v3 based on your lavalink version
});
      
      const mongoose = require('mongoose');
      

mongoose.connect(process.env.MONGODBURL);
      const stop = Date.now();
    console.log(`[${lang.client}] ${lang.timetostartclient}${(stop - start)/1000} ${lang.seconds}`.green);  
 
process.on('unhandledRejection', (reason, promise) => {
    console.error("[ANTI-CRASH] An error has occured and been successfully handled: [unhandledRejection]".red);
    console.error(promise, reason);
});

process.on("uncaughtException", (err, origin) => {
    console.error("[ANTI-CRASH] An error has occured and been successfully handled: [uncaughtException]".red);
    console.error(err, origin);
});
  
try {
      app.listen(8080);
      app.listen(80);

        const port = process.env.PORT;
var RateLimit = require('express-rate-limit');
var limiter = RateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // max 100 requests per windowMs
});

  app.get('/', async ({ query }, response) => {
	

	return response.redirect('https://docs.kitki30.tk/');
});
const Topgg = require("@top-gg/sdk")

const webhook = new Topgg.Webhook(process.env.topgg)

app.post("/topgg/vote", webhook.listener(async vote => {
  
  let user = vote.user;
  let userobject = await client.users.fetch(user);
    
   
      let votechannel=await client.channels.fetch(config.topggchannel);
      
        const embed = new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Top.gg')
	
	.setDescription(`Użytkownik ${userobject.username} zagłosował na bota na top.gg!\nNaciśnij przycisk na dole i zagłosuj!`);
	votechannel.send({embeds:[embed]});
        const embeddm= new EmbedBuilder()
	.setColor(0x0099FF)
	.setTitle('Top.gg')
	
	.setDescription(`Dziękuje za zagłosowanie na bota w top.gg!😸`);
        userobject.send({embeds:[embeddm]});
      
}))
}
      catch(er){
        console.log(er);}   
