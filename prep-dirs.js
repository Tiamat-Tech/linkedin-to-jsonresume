const fse = require('fs-extra');

const requiredDirs = ['./build', './build-bookmarklet', './build-browserext', './webstore-zips'];

for (let x = 0; x < requiredDirs.length; x++) {
    if (!fse.existsSync(requiredDirs[x])) {
        fse.mkdirSync(requiredDirs[x]);
    }
}
