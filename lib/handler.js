'use strict';

const execSync = require('child_process').execSync;
const fs = require('fs');
const anymatch = require('anymatch');

let _commandsObj = {};

const setCommandsObj = commandsObjVar => {
    _commandsObj = commandsObjVar;
}


const handleChange = (eventType, path) => {

    let lastLine = '';

    if (eventType==='edit') lastLine = getLastLine(path);

    let changedFilePath = path.replace(/\\/g,"/");
    let eventTypeCommandsOng = _commandsObj[eventType];

    if (typeof eventTypeCommandsOng !== 'undefined'){

        let actionLog=false;

        eventTypeCommandsOng.forEach(function(fileQueryObj) {

            let fileQueryPath=Object.keys(fileQueryObj)[0].replace(/\\/g,"/");
            

            if (anymatch(fileQueryPath, changedFilePath)){

                if (!actionLog) {
                    console.log('\x1b[33m',`------- Caught ${eventType} on ${path} -------`);
                    actionLog = true;
                };

                let fileQueryCommandArr = fileQueryObj[fileQueryPath];
                

                fileQueryCommandArr.forEach(function(command) {

                    let parsedCommand = command.replace(/\$FILE/g, path).replace(/\$LASTLINE/g, lastLine);

                    console.log('\x1b[32m',`--------> Executing: ${parsedCommand}`);

                    try {
                        console.log('\x1b[0m',execSync(parsedCommand, {encoding:'utf-8'}));
                    } catch (err) {
                        console.log('\x1b[31m', `There was a problem running: ${parsedCommand}`);
                    }

                    
                })


            }


        })

        if (actionLog) console.log('\x1b[33m',`------------------------------------------------`);

    }

}


const getLastLine = path => {
    const data = fs.readFileSync(path, 'utf-8');
    var lines = data.trim().split('\n');
    var lastLine = lines.slice(-1)[0];
    return lastLine;
}


const getTasks = (eventType, changedFilePath) => {
    
    
}


// const getExtension = filePath => {
//     console.log(path.basename(filePath));
//     path.exte
//     let splitPath = fileName.split('.');
//     let splitPathLength = splitPath.length;
//     let extension = splitPath[splitPathLength-1];
    
//     if (extension.length<1 || extension.length>5) extension = '*';
//     return extension;
// }


module.exports = {
    handleChange,
    setCommandsObj
}