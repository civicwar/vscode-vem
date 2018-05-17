import { CommandLineOptions } from 'command-line-args';
import { OptionDefinition, Section } from 'command-line-usage';

export const paramOptions: OptionDefinition[] = [
  {
    name: 'set',
    alias: 's',
    description: 'Sets the Extension Environment',
    type: String,
    typeLabel: '<Extension Name>'
  },
  {
    name: 'new',
    alias: 'n',
    description: 'Creates a new Extension Environment',
    type: String,
    typeLabel: '<Extension Name>'
  },
  {
    name: 'use',
    alias: 'u',
    description: 'Starts vscode with the selected Extension Environment',
    type: String,
    typeLabel: '<Extension Name>'
  },
  {
    name: 'list',
    alias: 'l',
    description: 'Lists already created Extension Environments',
    type: Boolean
  },
  {
    name: 'rem',
    alias: 'r',
    description: 'Deletes an Extension Environment',
    type: String,
    typeLabel: '<Extension Name>'
  },
  {
    name: 'help',
    alias: 'h',
    description: 'Prints this Help',
    type: Boolean
  },
  {
    name: 'install',
    description: 'Prepares Everything for the First Runtime',
    type: String,
    typeLabel: '<Extension PATH>'
  }
];

export interface VSCodeParams extends CommandLineOptions {
  help?: Boolean;
  rem?: String;
  list?: Boolean;
  use?: String;
  new?: String;
  set?: String;
  install?: String;
}

export const usageOptions: Section[] = [
  {
    header: 'Visual Studio Code Extension Environment Manager',
    content: 'Manages multiple Visual Studio Code Extension Workspaces'
  },
  {
    header: 'Options',
    optionList: paramOptions
  }
];
