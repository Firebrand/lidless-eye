'use strict';
const handler = require('./handler');
const yaml_loader = require('./yaml_loader');
const chokidar = require('chokidar');

function lidlessEye (ymlFilePath) {

yaml_loader.readYmlFile(ymlFilePath);

handler.setExtensionTasks(yaml_loader.extensionTasks);



var watcher = chokidar.watch(yaml_loader.pathArr, {
    ignored: '**/node_modules/**',
    ignoreInitial: true,
    persistent: true,
    usePolling: true,
    interval: 500,
    binaryInterval: 1000,
    awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 500
    }
});

watcher
    .on('add', path => handler.handleChange('new', path))
    .on('change', path => handler.handleChange('edit', path))
    .on('unlink', path => handler.handleChange('delete', path));



console.log('\x1b[32m', 'The Lidless Eye is ever watching...'); 

}

module.exports = lidlessEye;