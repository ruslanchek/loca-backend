import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocaleEntity } from './locale.entity';
import { Repository } from 'typeorm';
import { LocaleFixture } from './locale.fixture';

const cache = new Map<number, LocaleEntity>();

@Injectable()
export class LocaleService {
  constructor(
    @InjectRepository(LocaleEntity)
    private readonly projectRepository: Repository<LocaleEntity>,
  ) {
    new LocaleFixture(projectRepository);
  }

  async findAll(): Promise<LocaleEntity[]> {
    let items: LocaleEntity[] = [];

    if (cache.size > 0) {
      items = Array.from(cache.values());
    } else {
      items = await this.projectRepository.find();
      items.map(item => cache.set(item.id, item));
    }

    return items;
  }

  async findOne(id: number): Promise<LocaleEntity> {
    let item: LocaleEntity = null;

    if (cache.has(id)) {
      return cache.get(id);
    } else {
      item = await this.projectRepository.findOne({
        where: {
          id,
        },
      });

      if (item) {
        cache.set(id, item);
      }
    }

    return item;
  }
}
