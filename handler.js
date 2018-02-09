


handleChange = function(eventType, path) {

    extension = getExtension(path);

    console.log(extension);

}

getExtension = function(filePath) {
    let splitPath = filePath.split('.');
    let splitPathLength = splitPath.length;
    return splitPath[splitPathLength-1];
}


module.exports = {
    handleChange,
    getExtension
}