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
const fs = require('node:fs');
const path = require('node:path');
const foldersPath = path.join(__dirname, 'commands');
  const commandFolders = fs.readdirSync(foldersPath)
const { REST, Routes } = require('discord.js');
  require('dotenv').config();

  const commands = [];
  for (const folder of commandFolders) {
    
    const commandsPath = path.join(foldersPath, folder);
    const commandFiles = fs.readdirSync(commandsPath).filter(file => file.endsWith('.js'));
    
    for (const file of commandFiles) {
      const filePath = path.join(commandsPath, file);
      const command = require(filePath);
      if ('data' in command && 'execute' in command) {
        commands.push(command.data.toJSON());
      } else {
        console.log(`[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`);
      }
    }
  }
const delay = require(`delay`);
  
  (async () => {
    
      const rest = new REST().setToken(process.env.TOKEN);
      console.clear()
      
      console.clear()
      
      
      console.log(`Restarted guild commands!`)
      console.warn(`Waiting for ${commands.length} application (/) commands reload.`);
      
      console.log(`================================================================`);  
       
      console.clear()
      // The put method is used to fully refresh all commands in the guild with the current set
      const data = await rest.put(
        Routes.applicationCommands(process.env.CLIENTID),
        { body: commands },
      );
      console.log(`================================================================`);
      
      console.log(`Successfully reloaded ${data.length} application (/) commands.`);
      
      console.log(`Successfully reloaded ${data.length} application (/) commands.`);
      
    });
