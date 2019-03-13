import { Fixture } from '../fixtures/fixture';
import { ProjectEntity } from './project.entity';
import * as faker from 'faker';
import { EProjectStatus, EProjectType } from './project.enums';

export class ProjectFixture extends Fixture<ProjectEntity> {
  public get entities() {
    return this.times(20, i => {
      return {
        id: faker.random.number(),
        title: faker.commerce.productName(),
        description: faker.lorem.paragraph(1),
        type: faker.random.arrayElement([
          EProjectType.Api,
          EProjectType.Other,
          EProjectType.Promo,
          EProjectType.WebSite,
          EProjectType.WebApplication,
          EProjectType.IOs,
          EProjectType.DesktopApplication,
          EProjectType.Android,
        ]),
        status: faker.random.arrayElement([
          EProjectStatus.Ready,
          EProjectStatus.Archive,
          EProjectStatus.TranslationInProgress,
        ]),
        lastEdit: faker.date.past(),
        readyness: faker.random.number({ min: 0, max: 100 }),
        basePhrases: faker.random.number({ min: 1, max: 1000 }),
        baseWords: faker.random.number({ min: 10, max: 10000 }),
        issues: faker.random.number({ min: 0, max: 50 }),
        avatar: faker.internet.avatar(),
      };
    });
  }
}
