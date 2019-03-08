import { ParseIntPipe } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';
import { Phrase } from '../graphql.schema';
import { CreatePhraseDto, GetPhraseDto } from './phrase.dto';
import { PhraseService } from './phrase.service';

const pubSub = new PubSub();

@Resolver('Phrase')
export class CatsResolvers {
  constructor(private readonly phraseService: PhraseService) {}

  @Query('getPhrases')
  async getPhrases(
    @Args('getPhrasesInput') args: GetPhraseDto,
  ) {
    return await this.phraseService.findAll(args);
  }

  @Query('getPhrase')
  async findOneById(
    @Args('id', ParseIntPipe)
    id: number,
  ): Promise<Phrase> {
    return await this.phraseService.findOne(id);
  }

  @Mutation('createPhrase')
  async create(
    @Args('createPhraseInput') args: CreatePhraseDto,
  ): Promise<Phrase> {
    const createdPhrase = await this.phraseService.create(args);
    pubSub.publish('phraseCreated', { phraseCreated: createdPhrase });
    return createdPhrase;
  }

  @Subscription('phraseCreated')
  phraseCreated() {
    return {
      subscribe: () => pubSub.asyncIterator('phraseCreated'),
    };
  }
}
