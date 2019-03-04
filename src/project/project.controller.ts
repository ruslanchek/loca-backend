import { Controller, Get } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectEntity } from './project.entity';

@Controller('/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async get(): Promise<ProjectEntity[]> {
    return await this.projectService.findAll();
  }
}
