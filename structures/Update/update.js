const http = require('http'); // or 'https' for https:// URLs
const fs = require('fs');
//To link directly to a download of your latest release asset that was manually uploaded, the suffix is /releases/latest/download/asset-name.zip.
const file = fs.createWriteStream("updatepackage.zip");
const request = http.get("https://github.com/Kitki30/Mechownik/releases/latest/download/updatepackage.kitkiupdatefile", function(response) {
   response.pipe(file);

   // after download completed close filestream
   file.on("finish", () => {
       file.close();
       console.log("Downloaded Update Package");
     require('./updateunzip.js')
   });
});