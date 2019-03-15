import * as dotenv from 'dotenv';

dotenv.config();

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ElasticsearchService } from '@nestjs/elasticsearch';

let elasticsearchService: ElasticsearchService = null;

export function getElasticsearchService(): ElasticsearchService {
  return elasticsearchService;
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  elasticsearchService = app.get(ElasticsearchService);
  await app.listen(9001);
}
bootstrap();
