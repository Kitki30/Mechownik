console.log(`...`);
console.log(`Loading Mechownik`)
async function start(){
  const delay = require('delay')
  console.clear()
  
  console.log(`Mechownik by Kitki30`)
  console.log(`Thanks to all contributors!`)
  await delay(100)
  require("../Update/updatecheck.js")
  
}
start()