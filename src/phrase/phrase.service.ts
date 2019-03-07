import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PhraseEntity } from './phrase.entity';
import { Repository } from 'typeorm';
import { PhraseFixture } from './phrase.fixture';
import { CreatePhraseDto } from './phrase.dto';

@Injectable()
export class PhraseService {
  constructor(
    @InjectRepository(PhraseEntity)
    private readonly phraseRepository: Repository<PhraseEntity>,
  ) {
    new PhraseFixture(phraseRepository);
  }

  async create(args: CreatePhraseDto): Promise<PhraseEntity> {
    const model = new CreatePhraseDto();

    model.phraseId = args.phraseId;
    model.projectId = args.projectId;
    model.tags = args.tags;

    const phrase = new PhraseEntity();

    phrase.phraseId = args.phraseId;
    phrase.projectId = args.projectId;
    phrase.tags = args.tags;
    phrase.userId = 1;

    await this.phraseRepository.save(phrase);

    return phrase;
  }

  async findAll(): Promise<PhraseEntity[]> {
    return await this.phraseRepository.find({
      order: {
        id: 'DESC',
      },
    });
  }

  async findByProject(projectId: number): Promise<PhraseEntity[]> {
    return await this.phraseRepository.find({
      where: {
        projectId,
      },
    });
  }

  async findOne(id: number): Promise<PhraseEntity> {
    return await this.phraseRepository.findOne({
      where: {
        id,
      },
    });
  }
}
