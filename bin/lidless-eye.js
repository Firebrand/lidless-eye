#!/usr/bin/env node
'use strict';
const program = require('commander');
const lidlessEye = require('../lib/');
const packgjson = require('../package.json');


program
  .command('lidless')
  .version(packgjson.version)
  .description(packgjson.description)
  .option('-f, --file', 'The .yml file containing what to monitor and how to respond to changes')
  .action(pathToFile => lidlessEye(pathToFile) )
  .parse(process.argv); 
