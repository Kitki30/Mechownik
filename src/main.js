let started=0;
require('colors');
function start(){
  if (started==0){
    started=1;
    console.log(`[Kitki30 Utilities] Started.`.green);
    return 1;
  }
  else{
    console.log(`[Kitki30 Utilities] Alredy started. No need to start again!`.red);
    return 8;
  }
}
function log(text){
  console.log(text);
  return text;
}
module.exports = {
    start,
    log,
}