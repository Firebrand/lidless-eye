'use strict';

const exec = require('child_process').exec;
const fs = require('fs');

let _extensionTasks = {};

const setExtensionTasks = extensionTasksVar => {
    _extensionTasks = extensionTasksVar;
}


const handleChange = (eventType, path) => {

    let extension = getExtension(path);
    let lastLine = getLastLine(path);
    let cmdArray = _extensionTasks[`${eventType}:${extension}`] ? _extensionTasks[`${eventType}:${extension}`] : _extensionTasks[`${eventType}:*`];

    if (typeof cmdArray != 'undefined' && cmdArray.length > 0) {

        console.log('\x1b[32m',`----> Detected ${eventType} on ${path}`);

        cmdArray.forEach(command => {

            var parsedCommand = command.replace(/\$FILE/g, path).replace(/\$LASTLINE/g, lastLine);

            console.log('\x1b[32m',`--------> Executing: ${parsedCommand}`);

            exec(parsedCommand, (err, stdout, stderr) => {

                if (err) {
                    console.log('\x1b[31m',stderr);
                }
            
                console.log('\x1b[0m',stdout);
                
            });
        });
    }
}


const getLastLine = path => {
    const data = fs.readFileSync(path, 'utf-8');
    var lines = data.trim().split('\n');
    var lastLine = lines.slice(-1)[0];
    return lastLine;
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