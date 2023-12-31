var config = {};
require('colors');

// Kitki30 Utilities Package
config.devtools=false;// Run Kitki30-tools/dev package
config.devkey='';// Key to turn on dev tools, leave blank when you have no key
config.turnondevoptions=false;// Turn on dev options. Requires valid key included in Beta branch.


config.lang='en';// language. Available languages: en, pl
config.partnershipchannel="1168168874907291810";
// Id to channel with partnerships, Leave blank to turn off. 
config.owner='657229045624471556'; // Your discord id here
config.ram ='1024'; // Put ram your machine has in MB (Warning: this will not limit ram usage by bot its only for info commands)
config.botname='Bot Mechownik'; // Put your bots name (for footer of embeds etc.)
config.topgg=true;
/* Turn on top.gg functions for your bot
Can be set to true(on) or false(off)
*/
config.topgglink='https://top.gg/bot/1101105727340286022/vote'; // Put vote link to top.gg(used in vote command)
config.votetext='Poprostu naciśnij dowolny przycisk na dole, aby wesprzeć mnie w programowaniu bota!'; 
/*
Enter /vote command embed text here (not included in translations)
*/
config.topggchannel='1167080670498131969'; //enter channel id for sending embeds on vote.
config.sendtodo=true;
// Set this if you want to send new todo entries to channel. Can be true or false
config.todochannel='1163105932541165660';
// Set channel to send todo (ID)
config.funcat=true; // Set this if you want /cat command enabled. Requires api key (Key seted in enviroment variables)
config.fundog=true; // Set this if you want /dog command enabled. Requires api key (Key seted in enviroment variables)
config.clrafterlogin = false;// Set this to clear console when bot logged in
config.listconfig=true; // Show this config on start of bot
/*
    Translations
    Dont change anything herr
*/
var consolelang = require(`./structures/other/translations/console_${config.lang}.js`);
config.consoletranslation=consolelang;
// Console
console.log(`[${consolelang.config}] ${consolelang.cfgload}`.blue); 
if (config.listconfig==true){
  console.log(`\n[${consolelang.config}]`.green);
  console.log(`Owner ID = ${config.owner}\nRam = ${config.ram}\nBot Name = ${config.botname}\nClear console after bot login = ${config.clrafterlogin}\n[Top.gg Config]\nEnabled = ${config.topgg}\nTop.gg vote link = ${config.topgglink}\n[TODO Config]\nSend todo = ${config.sendtodo}\nTodo channel = ${config.todochannel}\n[Fun commands config]\nCat command = ${config.funcat}\nDog command = ${config.fundog}\n`.blue)
}
// Dont remove!!!
const ut=require("kitki30-tools");
ut.connect();
let utdev;
if(config.devtools){
utdev=require("kitki30-tools/dev");} 
if(config.devkey==""){
  
}
else{
 utdev.set_key(config.devkey)
  ut.red(config.devkey)
 }
  
  if(config.turnondevoptions){
    if (utdev.dev_on()==16) {
      ut.red('[Utilities/dev] Wrong Key')
    
    }
}
// Dont remove!!! 
module.exports =config;