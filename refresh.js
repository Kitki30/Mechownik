
(async ()=>{
const { REST, Routes } = require('discord.js');
const fs = require('node:fs');
const botname="Bot Mechownik";
const path = require('node:path');
require('colors');
require('dotenv').config();
console.log(`\n[Commands] Registering commands.`.blue); 
  const commands = [];
let totalcommandreg=0;
const foldersPath = path.join(__dirname, 'commands');
  const commandFolders = fs.readdirSync(foldersPath);
let totalcommand=0;
  
    
  for (const folder of commandFolders) {
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
  

  
})();

  