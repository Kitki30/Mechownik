
const fs = require('fs');
const http = require('https');
const path=require('path')
function cb(cb){
  console.log(cb);
}
const download = (url, dest, cb) => {
    const file = fs.createWriteStream(dest);

    const request = http.get(url, (response) => {
        // check if response is success
        if (response.statusCode !== 200) {
            url = url.parse(response.headers.location).hostname
        }

        response.pipe(file);
    });

    // close() is async, call cb after close completes
    file.on('finish', () => file.close(cb));

    // check for request error too
    request.on('error', (err) => {
        fs.unlink(dest, () => cb(err.message)); // delete the (partial) file and then return the error
    });

    file.on('error', (err) => { // Handle errors
        fs.unlink(dest, () => cb(err.message)); // delete the (partial) file and then return the error
    });
};
download("https://github.com/Kitki30/Mechownik/releases/latest/download/update.zip", path.join(__dirname,"../../updatepackage.zip"), cb)