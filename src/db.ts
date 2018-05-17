import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SqliteConnectionOptions } from 'typeorm/driver/sqlite/SqliteConnectionOptions';

@Entity()
export class Extension {
  @PrimaryGeneratedColumn() id?: number;

  @Column() path?: String;
  @Column() name?: String;
}

export const DBCONFIG: SqliteConnectionOptions = {
  type: 'sqlite',
  database: './extensions.db',
  synchronize: true,
  entities: [Extension]
};
