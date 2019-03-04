import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('locale')
export class LocaleEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  localeName: string;

  @Column({nullable: true})
  baseLocaleName: string;

  @Column({nullable: true})
  countryName: string;

  @Column({nullable: true})
  countryCode: string;
}
