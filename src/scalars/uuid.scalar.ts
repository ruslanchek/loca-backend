import { Scalar } from '@nestjs/graphql';
import { Kind } from 'graphql';

@Scalar('UUID')
export class UUIDScalar {
  description = 'UUID custom scalar type';

  parseValue(value) {
    return value; // value from the client
  }

  serialize(value) {
    return value; // value sent to the client
  }

  parseLiteral(ast) {
    if (ast.kind === Kind.STRING) {
      return ast.value; // ast value is always in string format
    }
    return null;
  }
}
