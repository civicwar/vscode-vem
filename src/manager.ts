import { exec } from 'child_process';
import { existsSync, mkdirSync } from 'fs';
import { join } from 'path';
import { cp, rm } from 'shelljs';
import { Not, createConnection } from 'typeorm';
import { DBCONFIG, Extension } from './db';
import { logError, logInfo } from './utils';

export class VisualStudioExManager {
  constructor() {}

  install(basePath: string) {
    createConnection(DBCONFIG)
      .then(async _connection => {
        const repo = _connection.getRepository(Extension);
        const exts = await repo.find({ name: Not('base') });

        // Check if we have extensions on db, if so remove the folders
        if (exts.length > 0) {
          logInfo('Install', 'Removing Previous Extensions...');
          logInfo('Install', `Found ${exts.length} Installed Extensions...`);

          exts.forEach(_e => {
            if (existsSync(_e.path)) {
              console.log(`Removing Folder : ${_e.path}`);
              rm('-rf', ext.path);
            }
          });
        }

        logInfo('Install', 'Clearing db if exists...');
        await repo.clear();

        logInfo('Install', `Checking if \x1b[32m${basePath}\x1b[0m Exists...`);
        if (!existsSync(basePath)) throw new Error('Path does not Exist!');

        const ext = <Extension>{
          name: 'base',
          path: basePath
        };
        await repo.save(ext);
        logInfo('Install', 'Successfully Installed!');
      })
      .catch(_e => logError('Install', _e));
  }

  create(name: string) {
    createConnection(DBCONFIG)
      .then(async _connection => {
        const repo = _connection.getRepository(Extension);
        if (!!(await repo.findOne({ name: name })))
          throw new Error('Extension Already Exists');

        const base = await repo.findOneOrFail({ name: 'base' });

        const ext = <Extension>{
          name: name,
          path: join(base.path, name)
        };
        await repo.save(ext);

        if (existsSync(ext.path))
          throw new Error('There is a folder with that name already...');

        mkdirSync(ext.path);
        logInfo('Create', 'Moving base extensions to new Environment');
        cp('-R', join(base.path, 'extensions/*'), ext.path);
        logInfo('Create', `Created the Environment ${name} Successfully`);
      })
      .catch(_e => logError('Create', _e));
  }

  remove(name: string) {
    createConnection(DBCONFIG)
      .then(async _connection => {
        const repo = _connection.getRepository(Extension);

        const ext = await repo.findOneOrFail({ name: name });
        logInfo('Remove', `Found : ${ext.name}`);
        logInfo('Remove', `Checking if \x1b[32m${ext.path}\x1b[0m exists...`);
        if (!existsSync(ext.path)) throw new Error('Folder not found...');
        rm('-rf', ext.path);

        await repo.remove(ext);
        logInfo('Remove', 'Removed Successfully');
      })
      .catch(_e => logError('Install', _e));
  }

  list() {
    createConnection(DBCONFIG).then(async _connection => {
      const repo = _connection.getRepository(Extension);
      const Table = require('cli-table3');
      const table = new Table({
        head: ['Name', 'Path']
      });

      const exts = await repo.find({ name: Not('base') });
      exts.forEach(_e => {
        table.push([_e.name, _e.path]);
      });

      console.log(table.toString());
    });
  }

  setEnv(name: string) {}

  useCode(name: string) {
    createConnection(DBCONFIG)
      .then(async _connection => {
        const repo = _connection.getRepository(Extension);

        const ext = await repo.findOneOrFail({ name: name });
        if (!existsSync(ext.path)) throw new Error('Folder/Extension not found...');

        logInfo('UseCode', `Starting code with : ${ext.name}@${ext.path}`);
        exec(`code -n --extensions-dir ${ext.path}`);
      })
      .catch(_e => logError('UseCode', _e));
  }
}
