import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { SearchDto } from './search.dto';
import { SearchResult } from '../graphql.schema';

@Injectable()
export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  public async search(args: SearchDto): Promise<SearchResult[]> {
    return [
      {
        title: args.string,
      },
    ];
  }
}
