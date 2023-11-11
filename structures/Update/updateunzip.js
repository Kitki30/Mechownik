const decompress = require("decompress");
const file="../../updatepackage.zip"
//function to extract ZIP file
async function unzip(file){
  const fs =require('fs')
  const path=require('path')
  console.log(`Extracting: ${file}`);
    const filePath = path.join(__dirname,file)
    const outputPath = path.join(__dirname, '../../updatepackage/')
  console.log(filePath, outputPath);
    await decompress(filePath,outputPath)
  .then((files) => {
    console.log(`Package Extracted`);
    console.log(files);
  require('./updateprocess.js')
  })
  .catch((error) => {
    console.log(error);
  });
  
}
unzip(file)