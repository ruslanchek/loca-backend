import { Module } from '@nestjs/common';
import { PhraseController } from './phrase.controller';
import { PhraseService } from './phrase.service';
import { PhraseEntity } from './phrase.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([PhraseEntity])],
  controllers: [PhraseController],
  providers: [PhraseService],
})
export class PhraseModule {}
