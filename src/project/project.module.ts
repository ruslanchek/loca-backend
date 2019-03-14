import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectEntity } from './project.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectResolver } from './project.resolver';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProjectEntity]),
  ],
  providers: [ProjectService, ProjectResolver],
})
export class ProjectModule {}
