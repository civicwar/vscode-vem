#! /usr/bin/env node
import cmd from 'command-line-args';
import usage from 'command-line-usage';
import 'reflect-metadata';
import { VisualStudioExManager } from '../src/manager';
import { VSCodeParams, paramOptions, usageOptions } from '../src/params';

const options: VSCodeParams = <VSCodeParams>cmd(paramOptions, {
  partial: true,
  stopAtFirstUnknown: true
});
const manager = new VisualStudioExManager();

if (options.help || options._unknown || Object.keys(options).length === 0)
  console.log(usage(usageOptions));

if (options.list) manager.list();

if (!!options.install) manager.install(options.install);

if (!!options.new) manager.create(options.new);

if (!!options.rem) manager.remove(options.rem);

if (!!options.set) manager.setEnv(options.set);

if (!!options.use) manager.useCode(options.use);
