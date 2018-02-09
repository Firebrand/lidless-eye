const yaml = require('yamljs');
const handler = require('./handler');


let pathArr = [];
let extensionTasks = {};
let _settings = {};


let readYmlFile = function (file) {

    try {
        _settings = yaml.load(file);
    } catch (err) {
        console.log(`There was a problem reading: ${file}`);
        process.exit();
    }

    for (let header in _settings) {

        let headerArr = header.split(' ');
        let type = headerArr[0];
        let path = headerArr[1];

        pathArr.push(path);
        let ext = handler.getExtension(path);
        extensionTasks[`${type}:${ext}`] = _settings[header];
    }

}


module.exports = {
    pathArr,
    extensionTasks,
    readYmlFile
};