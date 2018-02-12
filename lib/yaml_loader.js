'use strict';
const yaml = require('yamljs');
const handler = require('./handler');


let pathArr = [];
let commandsObj = {};
let _settings = {};


let readYmlFile = file => {

    try {
        _settings = yaml.load(file);

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
        typeof commandsObj[type] !== 'undefined' ?  commandsObj[type].push({ [path]: _settings[header]}) : commandsObj[type] = [{ [path]: _settings[header]}];

    }

}


module.exports = {
    pathArr,
    commandsObj,
    readYmlFile
};