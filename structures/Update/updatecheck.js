const axios = require('axios');
const githubPackageJsonUrl = 'https://raw.githubusercontent.com/Kitki30/Mechownik/main/package.json';
console.log(`Checking for updates`);

axios.get(githubPackageJsonUrl)
  .then(response => {
    
    const packageJson =response.data

    // Pobranie wersji z package.json
    const version = packageJson.version;
const fs = require('fs');
    const path = require('path');
const pack = path.join(__dirname, '../../package.json');
    
fs.readFile(pack, 'utf8', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  // Parsuj zawartość jako obiekt JSON
  const packageJsonLocal = JSON.parse(data);

  // Pobierz wersję z package.json
  const versionLocal = packageJsonLocal.version;

  if(version>versionLocal){
    console.log('Update Available!')
    console.log('Select Update In Menu To Update!')
    require('../menus/update.js')
  }else{
    console.log('Loading Menu');
      require('../menus/startmenu.js')
  }
});
  })
  .catch(error => {
    console.error('Failed to check version', error);
  });