import { Fixture } from '../fixtures/fixture';
import { LocaleEntity } from './locale.entity';
import { ELocaleDirection } from './locale.enums';

const loc = require('../data/locales.json');
const countries = require('../data/countries.json');

export class LocaleFixture extends Fixture<LocaleEntity> {
  public get entities() {
    return loc.map((item, i) => {
      const { localeName, title } = item;
      let countryName = '';
      let languageName = title;
      let direction: ELocaleDirection = ELocaleDirection.Ltr;
      let country = null;

      const titleParts = title.match('\\s\\(.*\\)');

      if (titleParts && titleParts.length > 0) {
        countryName = titleParts[0].replace(' (', '').replace(')', '');
        languageName = title.replace(titleParts[0], '');

        countryName = countryName
          .replace('Cyrillic, ', '')
          .replace('Latin, ', '')
          .replace('Simplified, ', '')
          .replace('Traditional, ', '');

        country = countries.find(c => {
          return c.name.common === countryName;
        });
      }

      if (title.match('Azerbaijani') || title === 'Azerbaijani') {
        countryName = 'Azerbaijan';

        country = countries.find(c => {
          return c.name.common === countryName;
        });
      }

      if (title.match('Arabic|Hebrew|Yiddish|Urdu') || title === 'Kazakh') {
        direction = ELocaleDirection.Rtl;
      }

      return {
        id: i,
        baseLocaleName: localeName.split('_')[0],
        localeName,
        title,
        countryName,
        countryCode: country && country.cca2 ? country && country.cca2 : null,
        languageName,
        direction,
        countryNameOfficial:
          country && country.name.official ? country.name.official : null,
        flagEmoji: country && country.flag ? country.flag : null,
      };
    });
  }
}
