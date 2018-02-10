'use strict';

const exec = require('child_process').exec;

let _extensionTasks = {};

const setExtensionTasks = extensionTasksVar => {
    _extensionTasks = extensionTasksVar;
}


const handleChange = (eventType, path) => {

    console.log('Change was detected:');
    console.log(`${eventType}:${path}`);

    let extension = getExtension(path);
    let cmdArray = _extensionTasks[`${eventType}:${extension}`];

    if (typeof cmdArray != 'undefined' && cmdArray.length > 0) {
        cmdArray.forEach(command => {

            var parsedCommand = command.replace("$FILE", path);

            exec(parsedCommand, (err, stdout, stderr) => {
                if (err) {
                    console.log(stderr);
                }
            
                console.log(stdout);
                
            });
        });
    }
}


const getExtension = filePath => {
    let splitPath = filePath.split('.');
    let splitPathLength = splitPath.length;
    let extension = splitPath[splitPathLength-1];

    if (extension.length<1 || extension.length>5) extension = '*';
    
    return extension;
}


module.exports = {
    handleChange,
    getExtension,
    setExtensionTasks
}