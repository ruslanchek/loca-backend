import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
// import { Project } from '../graphql.schema';
import { GetProjectsDto } from './project.dto';
import { ProjectService } from './project.service';

const pubSub = new PubSub();

@Resolver('Project')
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Query('getProjects')
  async getProjects(
    @Args('getProjectsInput') args: GetProjectsDto,
  ) {
    return await this.projectService.findAll(args);
  }

  @Query('getProject')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<any> {
    return await this.projectService.findOne(id);
  }

  // @Mutation('createProject')
  // async create(
  //   @Args('createProjectInput') args: CreateProjectDto,
  // ): Promise<Project> {
  //   const createdProject = await this.projectService.create(args);
  //   pubSub.publish('projectCreated', { projectCreated: createdProject });
  //   return createdProject;
  // }

  @Subscription('projectCreated')
  projectCreated() {
    return {
      subscribe: () => pubSub.asyncIterator('projectCreated'),
    };
  }
}
