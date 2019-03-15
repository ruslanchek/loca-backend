import { Repository } from 'typeorm';

export abstract class Fixture<Entity> {
  constructor(private readonly repository: Repository<Entity>) {
    (async () => {
      await this.clear();
      await this.fill();
    })();
  }

  public times<T>(times: number, iterator: (i: number) => T): T[] {
    const output: T[] = [];

    for (let i = 0; i < times; i++) {
      output.push(iterator(i));
    }

    return output;
  }

  public async clear() {
    await this.repository.query(
      `ALTER SEQUENCE "${
        this.repository.metadata.tableName
      }_id_seq" RESTART WITH 1;`,
    );
    await this.repository.clear();
  }

  public async processChunk(
    chunkSize: number,
    array: Entity[],
    iterator: (entities: Entity[]) => Promise<any>,
  ): Promise<any> {
    for (let i = 0, l = array.length; i < l; i += chunkSize) {
      console.log(
        `Fixtures for [${this.repository.metadata.tableName}] processing chunk ${i /
          chunkSize +
          1} of ${Math.ceil(array.length / chunkSize)}`,
      );
      await iterator(array.slice(i, i + chunkSize));
    }
  }

  public async fill() {
    await this.processChunk(1000, this.entities, async entities => {
      await this.repository.insert(entities);
    });
  }

  public abstract get entities(): Entity[];
}
