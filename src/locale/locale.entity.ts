import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ELocaleDirection } from './locale.enums';
import { UUID } from '../generated/graphql.schema';

@Entity('locale')
export class LocaleEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({ enum: ELocaleDirection, default: ELocaleDirection.Ltr })
  direction: ELocaleDirection;

  @Column()
  localeName: string;

  @Column({ nullable: true })
  baseLocaleName: string;

  @Column({ nullable: true })
  languageName: string;

  @Column({ nullable: true })
  countryName: string;

  @Column({ nullable: true })
  countryCode: string;

  @Column({ nullable: true })
  countryNameOfficial: string;

  @Column({ nullable: true })
  flagEmoji: string;
}
