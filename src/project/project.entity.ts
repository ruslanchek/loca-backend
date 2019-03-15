import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm';
import { EProjectStatus, EProjectType } from './project.enums';

@Entity('project')
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'New Project' })
  title: string;

  @Column()
  description: string;

  @Column({ enum: EProjectType, default: EProjectType.Other })
  type: EProjectType;

  @Column({ enum: EProjectStatus, default: EProjectStatus.Ready })
  status: EProjectStatus;

  @Column({ nullable: true })
  lastEdit: Date;

  @Column({ default: 0 })
  readyness: number;

  @Column({ default: 0 })
  basePhrases: number;

  @Column({ default: 0 })
  baseWords: number;

  @Column({ default: 0 })
  issues: number;

  @Column({ nullable: true })
  avatar: string;
}
