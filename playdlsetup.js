play_setup()
async function play_setup(){
console.log('Requiring kitki30-tools please wait...')
const ut=await require("kitki30-tools");
  console.log('Starting kitki30-tools please wait...')
  ut.start()
ut.blue('Welcome to Play-dl setup by kitki30')
ut.yellow('Warning play-dl is not made by kitki30, only THIS setup is made by kitki30');
ut.log('\n')
ut.green('What you need to setup music(play-dl):')
ut.blue('SoundCloud account')
ut.blue('Created SoundCloud app')
ut.red('\nStep 1')
ut.yellow('Copy client ID from your SoundCloud app')
ut.red('\nStep 2')
ut.yellow('Make new enviroment variable with name "scid" (enviroment variables are stored in .env files or in replit secrets tab when using replit)')
ut.red('\nStep 3')
ut.yellow('Paste your SoundCloud client id to enviroment variable')
ut.green('\nDone!!!')
}
