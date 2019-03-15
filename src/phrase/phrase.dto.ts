import {
  IsArray,
  IsDefined,
  IsEnum,
  IsNumber,
  IsString,
} from 'class-validator';
import { CommonOrderDirection, PhraseOrderBy } from '../generated/graphql.schema';

export class CreatePhraseDto {
  @IsDefined()
  phraseId: string;

  @IsDefined()
  projectId: number;

  @IsArray()
  tags: string[];
}

export class GetPhrasesDto {
  @IsDefined()
  @IsNumber()
  projectId: number;

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
