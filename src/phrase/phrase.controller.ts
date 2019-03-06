import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { PhraseService } from './phrase.service';
import { PhraseEntity } from './phrase.entity';
import { ApiHelper, IApiResult } from '../helpers/api.helper';

@Controller('/phrase')
export class PhraseController {
  constructor(private readonly phraseService: PhraseService) {}

  @Get()
  async getAll(): Promise<IApiResult<PhraseEntity[]>> {
    const items = await this.phraseService.findAll();

    return await ApiHelper.apiResult(items);
  }

  @Get('/by-project/:projectId')
  async getProjectItems(@Param('projectId') projectId): Promise<IApiResult<PhraseEntity[]>> {
    const items = await this.phraseService.findByProject(projectId);

    return await ApiHelper.apiResult(items);
  }

  @Get(':id')
  async getItem(@Param('id') id): Promise<IApiResult<PhraseEntity>> {
    const item = await this.phraseService.findOne(id);

    if (!item) {
      return ApiHelper.apiError(HttpStatus.NOT_FOUND, 'NOT_FOUND');
    }

    return await ApiHelper.apiResult(item);
  }
}
