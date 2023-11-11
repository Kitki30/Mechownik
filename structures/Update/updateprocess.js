
console.log(`Hello, welcome to Mechownik Open Source Project updater.\nRunning update file...`);
const { exec } = require('child_process');
exec('bash ../../updatepackage/structures/Update/update.sh', (err) => {
  if (err) {
    //some err occurred
    console.error(err)
  } else {
   
  }
});