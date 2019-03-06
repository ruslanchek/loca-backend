import { IsDefined } from 'class-validator';

export class CreatePhraseDto {
  @IsDefined()
  phraseId: string;

  @IsDefined()
  projectId: number;
}
