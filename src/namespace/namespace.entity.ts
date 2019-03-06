import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('namespace')
export class NamespaceEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'New Namespace' })
  title: string;

  @Column()
  description: string;
}
