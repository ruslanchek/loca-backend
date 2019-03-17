import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectEntity } from './project.entity';
import { Repository } from 'typeorm';
import { ProjectFixture } from './project.fixture';
import { GetProjectsDto } from './project.dto';

@Injectable()
export class ProjectService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
  ) {
    new ProjectFixture(projectRepository);
  }

  async findAll(args: GetProjectsDto): Promise<ProjectEntity[]> {
    const order = {};

    order[args.orderBy] = args.orderDirection;

    return await this.projectRepository.find({
      order,
      take: args.take,
      skip: args.skip,
    });
  }

  async findOne(id: string): Promise<ProjectEntity> {
    return await this.projectRepository.findOne({
      where: {
        id,
      },
    });
  }
}
