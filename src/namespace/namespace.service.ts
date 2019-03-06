import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { NamespaceEntity } from './namespace.entity';
import { Repository } from 'typeorm';
import { NamespaceFixture } from './namespace.fixture';

@Injectable()
export class NamespaceService {
  constructor(
    @InjectRepository(NamespaceEntity)
    private readonly namespaceRepository: Repository<NamespaceEntity>,
  ) {
    new NamespaceFixture(namespaceRepository);
  }

  async findAll(): Promise<NamespaceEntity[]> {
    return await this.namespaceRepository.find();
  }

  async findOne(id: number): Promise<NamespaceEntity> {
    return await this.namespaceRepository.findOne({
      where: {
        id,
      },
    });
  }
}
