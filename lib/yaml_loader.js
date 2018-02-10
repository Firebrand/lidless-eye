'use strict';
const yaml = require('yamljs');
const handler = require('./handler');


let pathArr = [];
let extensionTasks = {};
let _settings = {};


let readYmlFile = file => {

    try {
        _settings = yaml.load(file);
        console.log('Contents of yaml file:');
        console.log(_settings);

    } catch (err) {
        if (file.length<1) {
            console.log(`You need to specify a .yml file with your settings. See documentation.`);    
        } else {
            console.log(`There was a problem reading: ${file}`);
        }
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