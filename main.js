console.log(`...`);
console.log(`Loading Mechownik`)
async function start(){
  const delay = require('delay')
  console.clear()
  console.log(`Mechownik by Kitki30`)
  console.log(`Thanks to all contributors!`)
  console.log(`Menu is loading`)
  console.log(`\n requiring ./structures/menus/startmenu.js`);
  await delay(100)
  require('./structures/menus/startmenu.js')
}
start()