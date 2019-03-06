import { Fixture } from '../fixtures/fixture';
import { LocaleEntity } from './locale.entity';

const locales = require('../data/locales.json');

export class LocaleFixture extends Fixture<LocaleEntity> {
  public get entities() {
    return locales;
  }
}
