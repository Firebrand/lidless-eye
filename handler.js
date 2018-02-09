const { exec } = require('child_process');

let _extensionTasks = {};

const setExtensionTasks = function(extensionTasksVar) {
    _extensionTasks = extensionTasksVar;
}


const handleChange = function(eventType, path) {

    extension = getExtension(path);
    cmdArray = _extensionTasks[`${eventType}:${extension}`];

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


const getExtension = function(filePath) {
    let splitPath = filePath.split('.');
    let splitPathLength = splitPath.length;
    return splitPath[splitPathLength-1];
}


module.exports = {
    handleChange,
    getExtension,
    setExtensionTasks
}