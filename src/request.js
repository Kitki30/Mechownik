
async function connect(){
  const axios = require('axios')

let url = 'https://kitki30.github.io/Mechownik'
const main = require('./main.js')
await axios.get(url)
  .then(res => {
    main.green('[Utilities] Successfully connected to the server.')
    return 1;
  })
  .catch(error => {
    main.red('[Utilities] Can\'t connect to the server.')
    return 13;
});
}module.exports = {
  connect,
}