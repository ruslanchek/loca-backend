import { Controller, Get } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectEntity } from './project.entity';
import { ApiHelper, IApiResult } from '../helpers/api.helper';

@Controller('/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async get(): Promise<IApiResult<ProjectEntity[]>> {
    return await ApiHelper.apiResult(this.projectService.findAll());
  }
}
