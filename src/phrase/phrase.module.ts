import { Module } from '@nestjs/common';
import { PhraseService } from './phrase.service';
import { PhraseEntity } from './phrase.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CatsResolvers } from './phrase.reslolver';

@Module({
  imports: [TypeOrmModule.forFeature([PhraseEntity])],
  providers: [PhraseService, CatsResolvers],
})
export class PhraseModule {}
