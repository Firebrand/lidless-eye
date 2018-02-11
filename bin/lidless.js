#!/usr/bin/env node

var program = require('commander');
const lidlessEye = require('../lib/');
const packgjson = require('../package.json');


program
.version(packgjson.version)
.description(packgjson.description)
.option('-c, --config', 'Path to the .yml config file')
.action(path_to_yml_config_file=>lidlessEye(path_to_yml_config_file));


program.parse(process.argv);

if (program.args.length === 0) console.log(program.helpInformation());
