import { Fixture } from '../fixtures/fixture';
import { LocaleEntity } from './locale.entity';

const loc = require('../data/locales.json');

export class LocaleFixture extends Fixture<LocaleEntity> {
  public get entities() {
    const locales: LocaleEntity[] = loc.map((item, i) => {
      return {
        id: i,
        baseLocaleName: item.localeName,
        localeName: item.localeName,
        title: item.title,
        countryName: '',
        countryCode: '',
      };
    });

    return locales;
  }
}
