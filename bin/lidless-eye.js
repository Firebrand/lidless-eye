#!/usr/bin/env node
'use strict';
const program = require('commander');
const lidlessEye = require('../lib/');
const package = require('../package.json');


program
  .version(package.version)
  .description(package.description)
  .option('-f, --file', 'The .yml file containing what to monitor and how to respond to changes')
  .action(pathToFile => lidlessEye(pathToFile) )
  .parse(process.argv); 
