import { Fixture } from '../fixtures/fixture';
import { PhraseEntity } from './phrase.entity';
import * as faker from 'faker';

export class PhraseFixture extends Fixture<PhraseEntity> {
  public get entities() {
    return this.times(faker.random.number({ min: 15, max: 100 }), i => {
      const tags = this.times(faker.random.number(4), key => {
        return faker.random.word().toLowerCase().split(' ')[0];
      });

      return {
        id: faker.random.number(),
        phraseId: faker.random
          .word()
          .toUpperCase()
          .replace(/[\W_]+/g, '_'),
        tags,
      };
    });
  }
}
