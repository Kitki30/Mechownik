echo "Hello, I'm update file. I will update your mechownik bot"
echo "Please wait, I'm moving files from update package"
mkdir -p ../../../structures
mv -f ../../structures ../../../structures*
mv -f ../../package.json ../../../package.json
mv -f ../../package-lock.json ../../../package-lock.json
mv -f ../../config.js ../../../config.js.new
mv -f ../../main.js ../../../main.js
mv -f ../../LICENSE ../../../LICENSE
mv -f ../../README.md ../../../README.md
echo "Moved Files!"
echo "New settings may be needed! If bot crashes, please rename config.js.new to config.js and set config"
echo "Cleaning update package!"
rm ../../../updatepackage