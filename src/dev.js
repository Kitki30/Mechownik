let key;
const main=require("./main.js")
require('colors');
console.log(`[Utilities/Dev] Hello we detected that you required dev package. This is only for developers if you are not developer, dont require any functions here!`.yellow);
function dev_on(){
  return main.devfunctionon(key);
}
function set_key(keys){
  if (main.getstart==0){
    return console.log(`Start first`)
  }
  main.green('[Utilities Key Handler] Key setted')
  key = keys;
  return key;
}
module.exports ={
  dev_on, 
  set_key, 
}