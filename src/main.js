// All Errors:
/*
 1 - Action Executed Successfully
 8 - Bot alredy started
 9 - Log file creation failed
 10 - error deleting file
 11 - start.log doesnt exist
 12 - cant run first run
 13 - Error Connecting To The   Server
 14 - alredy comnected 
*/
let started=0;
let connected=0;
require('colors');
const conector=require('./request.js')
async function connect(){
  if(connected==0){
    connected=1;
    
    return conector.connect();
  }else{
    
    yellow('[Utilities] Alredy connected.') 
    return 14;
  }
}
function help(){
  
blue("Welcome to Kitki30-Utilities")
yellow("Using:") 
green("1. Require Kitki30-tools")
blue("const ut = require('kitki30-tools');")
green("Kitki30-Utilities package is now working (do step 1 on all files you want to use kitki30 utilities)")
yellow("Commands:")
blue("ut.start() - starts package\nut.help() - shows this\nut.log('text') - logs text\nut.info() - info about package\nColor commands:\nut.blue('text') - logs blue text\nut.red('text') - logs red text\nut.yellow('text') - logs yellow text text\nut.green('text') - logs green text\nut.black('text') - logs black text\nut.white('text') - logs white text\nut.cyan('text') - logs cyan text\nut.magenta('text') - logs magenta text\nDev commands:\nut.crash() - execute user initiated crash\n\n")
return 1;
                        
}
function reset(){
  
}
/*
Colored logs using functions
By Kitki30 

blue, 
red,
yellow, 
green,
black, 
white, 
cyan, 
magenta, 
*/
function start(){
  if (started==0){

    
    started=1;
    console.log(`[Kitki30 Utilities] Started.`.green);
    connect()
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

function blue(text){
  const convert=`${text}`.blue;
  console.log(convert);
  return convert;
}
function red(text){
  const convert=`${text}`.red;
  console.log(convert);
  return convert;
}
function yellow(text){
  const convert=`${text}`.yellow;
  console.log(convert);
  return convert;
}
function green(text){
  const convert=`${text}`.green;
  console.log(convert);
  return convert;
}
function black(text){
  const convert=`${text}`.black;
  console.log(convert);
  return convert;
}
function white(text){
  const convert=`${text}`.white;
  console.log(convert);
  return convert;
}
function cyan(text){
  const convert=`${text}`.cyan;
  console.log(convert);
  return convert;
}
function magenta(text){
  const convert=`${text}`.magenta;
  console.log(convert);
  return convert;
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
    blue, 
    red,
    yellow, 
    green,
    black, 
    white, 
    cyan, 
    magenta, 
    info,
    crash, 
    help, 
  connect,
}