import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { LocaleService } from './locale.service';
import { LocaleEntity } from './locale.entity';
import { ApiHelper, IApiResult } from '../helpers/api.helper';

@Controller('/locale')
export class LocaleController {
  constructor(private readonly localeService: LocaleService) {}

  @Get()
  async getAll(): Promise<IApiResult<LocaleEntity[]>> {
    const items = await this.localeService.findAll();

    return await ApiHelper.apiResult(items);
  }

  @Get(':id')
  async getItem(@Param('id') id): Promise<IApiResult<LocaleEntity>> {
    const item = await this.localeService.findOne(id);

    if (!item) {
      return ApiHelper.apiError(HttpStatus.NOT_FOUND, 'NOT_FOUND');
    }

    return await ApiHelper.apiResult(item);
  }
}
