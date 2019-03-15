import {
  IsArray,
  IsDefined,
  IsEnum,
  IsNumber,
  IsString,
} from 'class-validator';
import { CommonOrderDirection, PhraseOrderBy } from '../generated/graphql.schema';

export class CreateProjectDto {

}

export class GetProjectsDto {
  @IsDefined()
  @IsNumber()
  take: number;

  @IsDefined()
  @IsNumber()
  skip: number;

  @IsDefined()
  @IsEnum(PhraseOrderBy)
  orderBy: PhraseOrderBy;

  @IsDefined()
  @IsEnum(CommonOrderDirection)
  orderDirection: CommonOrderDirection;
}
