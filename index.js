const ymlFilePath = require('./program_setup');
const handler = require('./handler');
const yaml_loader = require('./yaml_loader');
const chokidar = require('chokidar');


yaml_loader.readYmlFile(ymlFilePath);

handler.setExtensionTasks(yaml_loader.extensionTasks);


var watcher = chokidar.watch(yaml_loader.pathArr, {
    ignoreInitial: true,
    awaitWriteFinish: {
        stabilityThreshold: 2000,
        pollInterval: 500
    }
});

watcher
    .on('add', path => handler.handleChange('new', path))
    .on('change', path => handler.handleChange('edit', path))
    .on('unlink', path => handler.handleChange('delete', path));



console.log('\x1b[32m', 'The Beholder is ever watching...'); 