import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from './project.entity';
import { Repository } from 'typeorm';
import { ProjectFixture } from './project.fixture';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
  ) {
    new ProjectFixture(projectRepository);
  }

  async findAll(): Promise<ProjectEntity[]> {
    return await this.projectRepository.find();
  }

  async findOne(id: number): Promise<ProjectEntity> {
    return await this.projectRepository.findOne({
      where: {
        id,
      },
    });
  }
}
