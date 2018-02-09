const program = require('commander');

program
  .version('1.0.0')
  .description('Run custom scripts whenever specified file changes are made');

program
  .option('-f, --file', 'The .yml file containing what to monitor and how to respond to changes')
  .action(pathToFile => {console.log(pathToFile)} );

program.parse(process.argv); 