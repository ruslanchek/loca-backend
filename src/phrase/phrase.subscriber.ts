import {
  EntitySubscriberInterface,
  EventSubscriber,
  InsertEvent,
} from 'typeorm';
import { PhraseEntity } from './phrase.entity';
import { getElasticsearchService } from '../main';
import { ELASTICSEARCH_APP_NAME } from '../search/search.service';
import { SearchResultKind } from '../generated/graphql.schema';

@EventSubscriber()
export class PhraseSubscriber
  implements EntitySubscriberInterface<PhraseEntity> {
  listenTo() {
    return PhraseEntity;
  }

  afterInsert(event: InsertEvent<PhraseEntity>) {
    if (event.entity) {
      console.log(event.entity);

      getElasticsearchService()
        .getClient()
        .create({
          index: ELASTICSEARCH_APP_NAME,
          type: SearchResultKind.phrase,
          id: event.entity.id,
          body: {
            title: event.entity.phraseId,
            tags: event.entity.tags,
            date: Date.now(),
          },
        });
    }
  }
}
