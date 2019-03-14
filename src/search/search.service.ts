import { Injectable } from '@nestjs/common';
import { SearchDto } from './search.dto';
import { SearchResult, SearchResultKind } from '../graphql.schema';
import { ProjectEntity } from '../project/project.entity';
import { Like, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { PhraseEntity } from '../phrase/phrase.entity';

@Injectable()
export class SearchService {
  constructor(
    @InjectRepository(ProjectEntity)
    private readonly projectRepository: Repository<ProjectEntity>,
    @InjectRepository(PhraseEntity)
    private readonly phraseRepository: Repository<PhraseEntity>,
  ) {}

  public async search(args: SearchDto): Promise<SearchResult[]> {
    const results: SearchResult[] = [];
    const queryString = args.string.toLowerCase();

    if (queryString.length >= 2) {
      const projectResult = await this.projectRepository
        .createQueryBuilder()
        .select(['id', '"title"'])
        .where(`LOWER("title") LIKE :title`, {
          title: `%${queryString}%`,
        })
        .execute();

      const phraseResult = await this.phraseRepository
        .createQueryBuilder()
        .select(['id', '"phraseId"'])
        .where(`LOWER("phraseId") LIKE :phraseId`, {
          phraseId: `%${queryString}%`,
        })
        .execute();

      if (projectResult) {
        projectResult.forEach(project => {
          results.push({
            id: project.id.toString(),
            kind: SearchResultKind.Project,
            title: project.title,
          });
        });
      }

      if (phraseResult) {
        phraseResult.forEach(phrase => {
          results.push({
            id: phrase.id.toString(),
            kind: SearchResultKind.Phrase,
            title: phrase.phraseId,
          });
        });
      }
    }

    return results;
  }
}
