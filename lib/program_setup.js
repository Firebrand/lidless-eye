'use strict';
const program = require('commander');

let filePath = '';

program
  .version('0.1.11')
  .description('Monitor user-specified files/folders for changes on specific file extensions and run relevant shell commands');

program
  .option('-f, --file', 'The .yml file containing what to monitor and how to respond to changes')
  .action(pathToFile => {filePath=pathToFile} );

program.parse(process.argv); 


module.exports = filePath;