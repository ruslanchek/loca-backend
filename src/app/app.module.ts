import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProjectModule } from '../project/project.module';
import { LocaleModule } from '../locale/locale.module';
import { PhraseModule } from '../phrase/phrase.module';
import { join } from 'path';
import { SearchModule } from '../search/search.module';
import { ElasticsearchConfigService } from '../search/search.config';
import { ElasticsearchModule } from '@nestjs/elasticsearch';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      debug: true,
      playground: true,
      installSubscriptionHandlers: true,
      definitions: {
        path: join(process.cwd(), 'src/generated/graphql.schema.ts'),
        outputAs: 'class',
      },
    }),
    ElasticsearchModule.registerAsync({
      useClass: ElasticsearchConfigService,
    }),
    ProjectModule,
    LocaleModule,
    PhraseModule,
    SearchModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {

  }
}
