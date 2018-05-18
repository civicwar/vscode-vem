import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

@Entity()
export class Extension {
  @PrimaryGeneratedColumn() id?: number;

  @Column() path!: string;
  @Column() name!: string;
}

export const DBCONFIG: SqliteConnectionOptions = {
  name: 'localdb',
  type: 'sqlite',
  database: process.env.HOME + '/.vsc-em/extensions.db',
  synchronize: true,
  entities: [Extension]
};
