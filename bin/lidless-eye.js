#!/usr/bin/env node
'use strict';
const program = require('commander');
const lidlessEye = require('../lib/');
const packgjson = require('../packgjson.json');


program
  .version(packgjson.version)
  .description(packgjson.description)
  .option('-f, --file', 'The .yml file containing what to monitor and how to respond to changes')
  .action(pathToFile => lidlessEye(pathToFile) )
  .parse(process.argv); 
