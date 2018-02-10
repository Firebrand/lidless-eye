#!/usr/bin/env node
'use strict';
const program = require('commander');
const lidlessEye = require('../lib/');


program
  .version('0.1.11')
  .description('Monitor user-specified files/folders for changes on specific file extensions and run relevant shell commands')
  .option('-f, --file', 'The .yml file containing what to monitor and how to respond to changes')
  .action(pathToFile => lidlessEye(pathToFile) )
  .parse(process.argv); 
