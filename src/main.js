// All Errors:
/*
 8 - Bot alredy started
 9 - Log file creation failed
*/
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
function info(){
  console.log(`Kitki30 Utilities is package to make work easier!`.green);
  return 1;
}
function crash(){
  return handlecrash("Crash initiated by user/tests!".red);
}
function handlecrash(error){
  console.warn("Kitki30 Utilities Crash!\n".red+error)
  return 1;
}
module.exports = {
    start,
    log,
    info,
    crash, 
}