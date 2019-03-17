import {
  IsArray,
  IsDefined,
  IsEnum,
  IsNumber,
  IsString,
} from 'class-validator';
import { CommonOrderDirection, PhraseOrderBy, UUID } from '../generated/graphql.schema';

export class CreatePhraseDto {
  @IsDefined()
  phraseId: string;

  @IsDefined()
  projectId: UUID;

  @IsArray()
  tags: string[];
}

export class GetPhrasesDto {
  @IsDefined()
  @IsNumber()
  projectId: UUID;

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
