import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { ProjectModule } from '../project/project.module';
import { LocaleModule } from '../locale/locale.module';
import { NamespaceModule } from '../namespace/namespace.module';

@Module({
  imports: [TypeOrmModule.forRoot(), ProjectModule, LocaleModule, NamespaceModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
