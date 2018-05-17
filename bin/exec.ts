#! /usr/bin/env node
import cmd from 'command-line-args';
import usage from 'command-line-usage';
import 'reflect-metadata';
import { VisualStudioExManager } from '../src/manager';
import { VSCodeParams, paramOptions, usageOptions } from '../src/params';

const options: VSCodeParams = <VSCodeParams>cmd(paramOptions);
const manager = new VisualStudioExManager();

if (options.help) {
  console.log(usage(usageOptions));
}

if (options.list) {
  manager.onInit();
}

if (!!options.install) {
  manager.install();
}
