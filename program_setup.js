const program = require('commander');

let filePath = '';


program
  .version('1.0.0')
  .description('Run custom scripts whenever specified file changes are made');

program
  .option('-f, --file', 'The .yml file containing what to monitor and how to respond to changes')
  .action(pathToFile => {filePath=pathToFile} );

program.parse(process.argv); 


module.exports = filePath;