const unzipper = require("unzipper")
const file="updatepackage.zip"
//function to extract ZIP file
const extractZip = async (file) => {
    const filePath = __dirname + '/' + file
    const outputPath = __dirname + '../../updatepackage/'
    await fs.createReadStream(filePath)
        .pipe(unzipper.Extract({ path: outputPath }))
        .promise()
  console.log(`Package Extracted`);
  require('./updateprocess.js')
}