import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { Index } from 'typeorm/decorator';

@Entity('phrase')
export class PhraseEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
  projectId: number;
}
