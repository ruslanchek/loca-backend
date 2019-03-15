import { Fixture } from '../fixtures/fixture';
import { PhraseEntity } from './phrase.entity';
import * as faker from 'faker';

export class PhraseFixture extends Fixture<PhraseEntity> {
  public get entities() {
    const stepNumber = 1;
    const stepFixture = 1000;
    const stepProject = 100;

    return this.times(stepFixture, i => {
      const tags = this.times(faker.random.number(4), key => {
        return faker.lorem
          .word()
          .toLowerCase()
          .split(' ')[0];
      });

      return {
        id: i + 1 + stepFixture * stepNumber,
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
