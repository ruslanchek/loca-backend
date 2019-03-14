import { Module } from '@nestjs/common';
import { ElasticsearchModule } from '@nestjs/elasticsearch';
import { SearchService } from './search.service';
import { SearchResolver } from './search.resolver';

@Module({
  imports: [
    ElasticsearchModule.register({
      host: 'localhost:9200',
      log: 'trace',
    }),
  ],
  providers: [SearchService, SearchResolver],
})
export class SearchModule {}
