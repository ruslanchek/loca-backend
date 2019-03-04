import { Fixture } from '../fixtures/fixture';
import { LocaleEntity } from './locale.entity';

const languages = require('../data/languages.json');

export class LocaleFixture extends Fixture<LocaleEntity> {
  public get entities() {
    return languages;
  }
}
