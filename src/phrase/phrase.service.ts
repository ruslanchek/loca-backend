import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhraseEntity } from './phrase.entity';
import { Repository } from 'typeorm';
import { PhraseFixture } from './phrase.fixture';

@Injectable()
export class PhraseService {
  constructor(
    @InjectRepository(PhraseEntity)
    private readonly phraseRepository: Repository<PhraseEntity>,
  ) {
    new PhraseFixture(phraseRepository);
  }

  async findAll(): Promise<PhraseEntity[]> {
    return await this.phraseRepository.find();
  }

  async findOne(id: number): Promise<PhraseEntity> {
    return await this.phraseRepository.findOne({
      where: {
        id,
      },
    });
  }
}
