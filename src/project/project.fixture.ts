import { Fixture } from '../fixtures/fixture';
import { ProjectEntity } from './project.entity';
import * as faker from 'faker';

export class ProjectFixture extends Fixture<ProjectEntity> {
  public get entities() {
    return this.times(20, i => {
      return {
        id: faker.random.number(),
        title: faker.commerce.productName(),
        description: faker.lorem.paragraph(1),
      };
    });
  }
}
