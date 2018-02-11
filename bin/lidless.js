#!/usr/bin/env node

var program = require('commander');
const lidlessEye = require('../lib/');
const packgjson = require('../package.json');


program
.version(packgjson.version)
.description(packgjson.description)
.command('eye <path_to_yml_config_file>')
.action(path_to_yml_config_file=>lidlessEye(path_to_yml_config_file.replace(/['"]+/g, '')));


program.parse(process.argv);

if (program.args.length === 0) console.log(program.helpInformation());
