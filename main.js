let option=false;
function menu() {
var readline = require('readline');

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY)
    process.stdin.setRawMode(true);
const ut=require('kitki30-tools')
  ut.start()
ut.green('Mechownik Start Menu')
ut.blue('1. Start Client')
ut.blue('2. Refresh SlashCommands')
ut.blue('3. Refresh SlashCommands and start Client')
ut.red('4. Exit')
ut.yellow('Starting client in 5 seconds if no selection')
ut.green('Made By Kitki30')
process.stdin.on('keypress', (chunk, key) => {
  if (key && key.name == '4'){
    option=true;
    process.exit();
  }
  else if (key && key.name == '1'){
    option=true;
   console.clear();
    require('./structures/client.js');
  } 
  else if (key && key.name == '2'){
    option=true;
   console.clear() 
     require('./structures/refresh.js') 
  }
 else if (key && key.name == '3'){
option=true;
console.clear() 
  require('./structures/other/RefreshPlusClient.js')
  }
  else{
    menu()
  }
});
 } 
menu()
setTimeout(() => {
  if(option==false){
    console.clear()
    console.log('No Option Selected Running Client')
  require('./structures/client.js')
    }
}, 5000)