var en = {};
require('colors');
/*
(Language) translation by (Your name)
*/
/*
(You can delete this)
Please make pull request with translation in translations folder

To translate:
1. Make file in translation folder with name "console_lang.js", replace lang with language you want to make
2. Copy this template and paste to new file
3. Translate file, dont change names (eg. en.informations needs to stay en.informations even if your translation is not english)
4. Change (Language) to language you translate to and (Your name) to your name or nickname
5. Delete this comment
6. When you are done, create pull request and wait for reply
*/
en.lang="en_us"
en.translationload =`[Console Translations] Console translation(${en.lang}) loaded`;
en.informations="Informations";
en.name="Name";
en.author="Author";
en.version="Version";
en.madeondjs="Made on discord.js v14";
en.info="Info";
en.logstext="Logs will be displayed here:";
en.events="Events";
en.eventhandler="Event handler loading";
en.eventload="Event loaded";
en.eventonce=", once";
en.commands="Commands";
en.loadingcommands="Loading commands.";
en.commandload="Command loaded";
en.commandloaderr="Unable to load command";
en.commandcounterA="Loaded";
en.commandcounterB="commands";
en.client="Client";
en.timetostartclient="Time to start client = ";
en.seconds="seconds.";
en.ready="Client ready!";
en.config="Config";
en.cfgload="Config loaded."
console.log(`${en.translationload}`.blue); 
module.exports = en;
