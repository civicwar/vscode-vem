#! /usr/bin/env node
import cmd, { OptionDefinition } from 'command-line-args';
import usage from 'command-line-usage';

const paramOptions: OptionDefinition[] = [
  { name: 'set', alias: 's', type: String },
  { name: 'get', alias: 'g', type: String },
  { name: 'list', alias: 'l', defaultOption: true }
];

const options = cmd(paramOptions);

console.log(usage(paramOptions));
