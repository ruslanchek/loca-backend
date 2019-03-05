import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { LocaleEntity } from './locale.entity';
import { Repository } from 'typeorm';
import { LocaleFixture } from './locale.fixture';

@Injectable()
export class LocaleService {
  constructor(
    @InjectRepository(LocaleEntity)
    private readonly projectRepository: Repository<LocaleEntity>,
  ) {
    new LocaleFixture(projectRepository);
  }

  async findAll(): Promise<LocaleEntity[]> {
    return await this.projectRepository.find();
  }

  async findOne(id: number): Promise<LocaleEntity> {
    return await this.projectRepository.findOne({
      where: {
        id,
      },
    });
  }
}
