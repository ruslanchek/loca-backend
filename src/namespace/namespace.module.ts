import { Module } from '@nestjs/common';
import { NamespaceController } from './namespace.controller';
import { NamespaceService } from './namespace.service';
import { NamespaceEntity } from './namespace.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([NamespaceEntity])],
  controllers: [NamespaceController],
  providers: [NamespaceService],
})
export class NamespaceModule {}
