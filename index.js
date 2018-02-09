const chokidar = require('chokidar');
const program = require('./program_setup');
const yaml = require('yamljs');
const cmd = require('node-cmd');
const handler = require('./handler');



let settings = yaml.load('myfile.yml');
let pathArr = [];
let extensionTasks = {};


for (let path in settings) {
    pathArr.push(path);
    let ext = handler.getExtension(path);
    
}


var watcher = chokidar.watch(pathArr, {
    awaitWriteFinish: {
        stabilityThreshold: 3000,
        pollInterval: 500
    }
});

watcher
    .on('add', path => handler.handleChange('add', path))
    .on('change', path => handler.handleChange('change', path))
    .on('unlink', path => handler.handleChange('unlink', path));