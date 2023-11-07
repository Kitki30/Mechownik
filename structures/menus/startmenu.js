let option=false;
console.log('Spawning menu...')
console.log('Requiring config...')
var config = require('../config.js');
console.log('Loading translation')
var lang = config.consoletranslation; 
console.log(lang.startreadytoshow)
function menu() {
var readline = require('readline');

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY)
    process.stdin.setRawMode(true);
const ut=require('kitki30-tools')
  ut.start()
  console.clear()
ut.green(lang.startmenu)
ut.blue(lang.clientoption)
ut.blue(lang.refresh)
ut.blue(lang.refplusclient)
ut.red(lang.exitoption)
ut.yellow(lang.nochoicetip)
ut.green(lang.kitki)
process.stdin.on('keypress', (chunk, key) => {
  if (key && key.name == '4'){
    option=true;
    process.exit();
  }
  else if (key && key.name == '1'){
    option=true;
   console.clear();
    require('../client.js');
  } 
  else if (key && key.name == '2'){
    option=true;
   console.clear() 
     require('../refresh.js') 
  }
 else if (key && key.name == '3'){
option=true;
console.clear() 
  require('../other/RefreshPlusClient.js')
  }
  else{
    menu()
  }
});
 }
console.log(lang.cfgshowingmenu)
menu()
setTimeout(() => {
  if(option==false){
    console.clear()
    console.log(lang.menunooption)
  require('../client.js')
    }
}, 5000)