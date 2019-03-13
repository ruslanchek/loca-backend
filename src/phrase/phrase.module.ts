import { Module } from '@nestjs/common';
import { PhraseService } from './phrase.service';
import { PhraseEntity } from './phrase.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PhraseResolver } from './phrase.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([PhraseEntity])],
  providers: [PhraseService, PhraseResolver],
})
export class PhraseModule {}
