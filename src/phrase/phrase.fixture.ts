import { Fixture } from '../fixtures/fixture';
import { PhraseEntity } from './phrase.entity';
import * as faker from 'faker';

export class PhraseFixture extends Fixture<PhraseEntity> {
  public get entities() {
    const stepNumber = 1;
    const stepFixture = 40;
    const stepProject = 10;

    return this.times(stepFixture, i => {
      const tags = this.times(faker.random.number(4), key => {
        return faker.lorem
          .word()
          .toLowerCase()
          .split(' ')[0];
      });

      return {
        id: faker.random.uuid(),
        phraseId: faker.lorem
          .words(faker.random.number({ min: 2, max: 5 }))
          .toUpperCase()
          .replace(/[\W_]+/g, '_'),
        tags,
        userId: 1,
        projectId: faker.random.number({
          min: stepNumber * stepProject,
          max: stepNumber * stepProject + stepProject,
        }),
      };
    });
  }
}
