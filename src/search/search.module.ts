import { Module } from '@nestjs/common';
import { SearchService } from './search.service';
import { SearchResolver } from './search.resolver';
import { ProjectEntity } from '../project/project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhraseEntity } from '../phrase/phrase.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEntity, PhraseEntity])],
  providers: [SearchService, SearchResolver],
})
export class SearchModule {}
