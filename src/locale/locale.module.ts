import { Module } from '@nestjs/common';
import { LocaleController } from './locale.controller';
import { LocaleService } from './locale.service';
import { LocaleEntity } from './locale.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([LocaleEntity])],
  controllers: [LocaleController],
  providers: [LocaleService],
})
export class LocaleModule {}
