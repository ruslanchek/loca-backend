import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchResolver } from './search.resolver';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { ElasticsearchConfigService } from './search.config';

@Module({
  imports: [
    ElasticsearchModule.registerAsync({
      useClass: ElasticsearchConfigService,
    }),
  ],
  providers: [SearchService, SearchResolver],
})
export class SearchModule {}
