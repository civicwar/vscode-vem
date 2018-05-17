import { createConnection, getManager } from 'typeorm';
import { DBCONFIG, Extension } from './db';

export class VisualStudioExManager {
  constructor() {
    this.onInit();
  }

  async onInit() {
    createConnection(DBCONFIG)
      .then(_c => _c.manager.create(Extension))
      .catch(_e => console.log('[OnInit] ', _e));
  }

  async install() {
    const repo = getManager();
    const envs = repo.find(Extension);
    console.log(envs);
  }
}
