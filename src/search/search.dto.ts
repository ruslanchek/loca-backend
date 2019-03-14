import { IsDefined, IsString, MinLength } from 'class-validator';

export class SearchDto {
  @IsDefined()
  @IsString()
  @MinLength(0)
  string: string;
}
