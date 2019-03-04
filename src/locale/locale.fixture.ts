import { Fixture } from '../fixtures/fixture';
import { LocaleEntity } from './locale.entity';

export class LocaleFixture extends Fixture<LocaleEntity> {
  public get entities() {
    const locales: LocaleEntity[] = [
      {
        id: 1,
        title: 'English',
        localeName: 'en',
      },

      {
        id: 1,
        title: 'Deutsch',
        localeName: 'de',
      },
    ];

    return locales;
  }
}
