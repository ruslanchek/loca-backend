import { Injectable } from '@nestjs/common';
import { ElasticsearchService } from '@nestjs/elasticsearch';
import { SearchDto } from './search.dto';
import { SearchResult, SearchResultKind } from '../generated/graphql.schema';

export const ELASTICSEARCH_APP_NAME = 'userdata';

@Injectable()
export class SearchService {
  constructor(private readonly elasticsearchService: ElasticsearchService) {}

  public async search(args: SearchDto): Promise<SearchResult[]> {
    const results: SearchResult[] = [];

    try {
      const searchResult = await this.elasticsearchService.getClient().search({
        index: ELASTICSEARCH_APP_NAME,
        q: encodeURIComponent(args.string),
      });

      if (searchResult && searchResult.hits && searchResult.hits.total > 0) {
        searchResult.hits.hits.map(hit => {
          if (SearchResultKind[hit._type]) {
            results.push({
              title: hit._source['title'],
              id: hit._id,
              kind: SearchResultKind[hit._type],
              highlights: hit.highlight,
            });
          }
        });
      }
    } catch (e) {
      console.error(e);
    }

    return results;
  }
}
