import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('project')
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'New Project' })
  title: string;

  @Column()
  description: string;
}
