import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Index } from 'typeorm/decorator';
import { UUID } from '../generated/graphql.schema';

@Entity('phrase')
export class PhraseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  phraseId: string;

  @Column('text', { array: true, nullable: true })
  @Index()
  tags: string[];

  @Column({
    select: false,
  })
  @Index()
  userId: number;

  @Column({
    select: false,
  })

  @Index()
  projectId: string;
}
