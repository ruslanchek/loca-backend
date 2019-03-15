import { Fixture } from '../fixtures/fixture';
import { LocaleEntity } from './locale.entity';
import * as faker from 'faker';
const locales = require('../data/locales.json');

export class LocaleFixture extends Fixture<LocaleEntity> {
  public get entities() {
    return locales.map(locale => {
      return {
        ...locale,
        id: faker.random.uuid(),
      };
    });
  }
}
