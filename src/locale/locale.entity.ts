import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('locale')
export class LocaleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  localeName: string;

  @Column('text', { array: true, nullable: true })
  synonyms: string[];
}
