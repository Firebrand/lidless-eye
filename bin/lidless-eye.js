#!/usr/bin/env node
'use strict';
const program = require('commander');
const lidlessEye = require('../lib/');
const packgjson = require('../package.json');


program
  .alias('lidless')
  .version(packgjson.version)
  .description(packgjson.description)
  .option('-f, --file', 'The .yml file containing what to monitor and how to respond to changes')
  .action(file=>lidlessEye(file));

program.parse(process.argv)
//lidlessEye(process.argv[3]);