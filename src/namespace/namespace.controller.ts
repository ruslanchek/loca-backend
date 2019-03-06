import { Controller, Get, HttpStatus, Param } from '@nestjs/common';
import { NamespaceService } from './namespace.service';
import { NamespaceEntity } from './namespace.entity';
import { ApiHelper, IApiResult } from '../helpers/api.helper';

@Controller('/namespace')
export class NamespaceController {
  constructor(private readonly namespaceService: NamespaceService) {}

  @Get()
  async getAll(): Promise<IApiResult<NamespaceEntity[]>> {
    const items = await this.namespaceService.findAll();

    return await ApiHelper.apiResult(items);
  }

  @Get(':id')
  async getItem(@Param('id') id): Promise<IApiResult<NamespaceEntity>> {
    const item = await this.namespaceService.findOne(id);

    if (!item) {
      return ApiHelper.apiError(HttpStatus.NOT_FOUND, 'NOT_FOUND');
    }

    return await ApiHelper.apiResult(item);
  }
}
