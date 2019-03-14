import { Repository } from 'typeorm';
import { ElasticsearchService } from '@nestjs/elasticsearch';

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

  public async fill() {
    await this.repository.insert(this.entities);
  }

  public abstract get entities(): Entity[];
}
