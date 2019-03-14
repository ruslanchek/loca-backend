import { Args, Query, Resolver } from '@nestjs/graphql';
import { SearchService } from './search.service';
import { SearchDto } from './search.dto';

@Resolver('Search')
export class SearchResolver {
  constructor(private readonly searchService: SearchService) {}

  @Query('search')
  async search(
    @Args('searchInput') args: SearchDto,
  ) {
    return await this.searchService.search(args);
  }
}
