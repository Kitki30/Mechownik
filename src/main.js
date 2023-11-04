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
 15 - Start First
*/
let started=0;
let connected=0;
let dev =0;
require('colors');
const conector=require('./request.js')
function devfunctionon(code){
  if(started==0){
    console.log('[Utilities] Error 15')
    return 15;
  }
  if(dev==1){
    blue('[Utilities Dev] Dev is turned on!')
    return 1;
  }
  if(code=='Start'){
    dev=1;
    blue('[Utilities Dev] Welcome to utilities dev!')
    return 1;
    }
  return 16;
  }
async function connect(){
  if(started==0){
    started=2;
    red('[Utilities] You need to start package first.');
    started=0;
    return 15;
  } 
  if(connected==0){
    connected=1;
    
    return conector.connect();
  }else{
    
    yellow('[Utilities] Alredy connected.') 
    return 14;
  }
}
function help(){
if(started==0){
    started=2;
    red('[Utilities] You need to start package first.');
    started=0;
    return 15;
  } 
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
 if(started==0){
    started=2;
    red('[Utilities] You need to start package first.');
    started=0;
    return 15;
  } 
  yellow('Reseting...')
  yellow('Reseting start value')
  started=2;
  green('Reseted start value!')
  yellow('Reseting connect value')
  connected=0;
  green('Reseted connect value!')
  yellow('Rereseting start value')
  started=0;
  console.log('Reseted!'.green)
  console.log('Use ut.start() to start package again!'.gray)
  return 1;
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
    return 1;
  }
  else{
    console.log(`[Kitki30 Utilities] Alredy started. No need to start again!`.red);
    return 8;
  }
}


function log(text){
  if(started==0){
    started=2;
    red('[Utilities] You need to start package first.');
    started=0;
    return 15;
  } 
  console.log(text);
  return text;
}

function blue(text){
  if(started==0){
    started=2;
    red('[Utilities] You need to start package first.');
    started=0;
    return 15;
  } 
  const convert=`${text}`.blue;
  console.log(convert);
  return convert;
}
function red(text){
  if(started==0){
    started=2;
    red('[Utilities] You need to start package first.');
    started=0;
    return 15;
  } 
  const convert=`${text}`.red;
  console.log(convert);
  return convert;
}
function yellow(text){
  if(started==0){
    started=2;
    red('[Utilities] You need to start package first.');
    started=0;
    return 15;
  } 
  const convert=`${text}`.yellow;
  console.log(convert);
  return convert;
}
function green(text){
  if(started==0){
    started=2;
    red('[Utilities] You need to start package first.');
    started=0;
    return 15;
  } 
  const convert=`${text}`.green;
  console.log(convert);
  return convert;
}
function black(text){
  if(started==0){
    started=2;
    red('[Utilities] You need to start package first.');
    started=0;
    return 15;
  } 
  const convert=`${text}`.black;
  console.log(convert);
  return convert;
}
function white(text){
  if(started==0){
    started=2;
    red('[Utilities] You need to start package first.');
    started=0;
    return 15;
  } 
  const convert=`${text}`.white;
  console.log(convert);
  return convert;
}
function cyan(text){
  if(started==0){
    started=2;
    red('[Utilities] You need to start package first.');
    started=0;
    return 15;
  } 
  const convert=`${text}`.cyan;
  console.log(convert);
  return convert;
}
function magenta(text){
  if(started==0){
    started=2;
    red('[Utilities] You need to start package first.');
    started=0;
    return 15;
  } 
  const convert=`${text}`.magenta;
  console.log(convert);
  return convert;
}
function info(){
  if(started==0){
    started=2;
    red('[Utilities] You need to start package first.');
    started=0;
    return 15;
  } 
  console.log(`Kitki30 Utilities is package to make work easier!`.green);
  return 1;
}
function crash(){
  if(started==0){
    started=2;
    red('[Utilities] You need to start package first.');
    started=0;
    return 15;
  } 
  if (dev==0){
    blue('Enable dev functions first')
    return 16;
  }
  return handlecrash("Crash initiated by user/tests!".red);
}
function handlecrash(error){
  console.warn("Kitki30 Utilities Crash!\n".red+error)
  return 1;
}
function getstart(){
  return started;
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
  reset, 
  getstart, 
  devfunctionon, 
}