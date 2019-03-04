import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectEntity } from './project.entity';
import { ApiHelper, IApiResult } from '../helpers/api.helper';

@Controller('/project')
export class ProjectController {
  constructor(private readonly projectService: ProjectService) {}

  @Get()
  async getAll(): Promise<IApiResult<ProjectEntity[]>> {
    const items = await this.projectService.findAll();

    return await ApiHelper.apiResult(items);
  }

  @Get(':id')
  async getItem(@Param('id') id): Promise<IApiResult<ProjectEntity>> {
    const item = await this.projectService.findOne(id);

    if (!item) {
      return ApiHelper.apiError(HttpStatus.NOT_FOUND, 'NOT_FOUND');
    }

    return await ApiHelper.apiResult(item);
  }
}
