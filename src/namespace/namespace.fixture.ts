import { Fixture } from '../fixtures/fixture';
import { NamespaceEntity } from './namespace.entity';
import * as faker from 'faker';

export class NamespaceFixture extends Fixture<NamespaceEntity> {
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
