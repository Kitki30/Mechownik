var config = {};
require('colors');
config.owner='657229045624471556'; // Your discord id here
config.ram ='1024'; // Put ram your machine has in MB (Warning: this will not limit ram usage by bot its only for info commands)
config.botname='Bot Mechownik'; // Put your bots name (for footer of embeds etc.)
config.topgg=true;
/* Turn on top.gg functions for your bot
Can be set to true(on) or false(off)
*/
config.topgglink='https://top.gg/bot/1101105727340286022/vote'; // Put vote link to top.gg(used in vote command)
config.topggvotetext='Poprostu naciśnij dowolny przycisk na dole, aby wesprzeć mnie w programowaniu bota!'; 
/*
Enter /vote command embed text here (not included in translations)
*/
config.sendtodo=true;
// Set this if you want to send new todo entries to channel. Can be true or false
config.todochannel='1163105932541165660';
// Set channel to send todo (ID)
config.funcat=true; // Set this if you want /cat command enabled. Requires api key (Key seted in enviroment variables)
console.log(`[Config] Config loaded`.blue); 
module.exports = config;