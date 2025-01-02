import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { Assignment } from './assignment.entity';  // Import from the same directory

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })  // Marked as nullable
  firstName?: string;

  @Column({ nullable: true })  // Marked as nullable
  lastName?: string;

  @Column({ unique: true, nullable: true })  // Marked as nullable and unique
  email?: string;

  @Column({ nullable: true })  // Marked as nullable
  enrollmentDate?: Date;

  @CreateDateColumn()
  createdAt?: Date;

  @UpdateDateColumn()
  updatedAt?: Date;

  @OneToMany(() => Assignment, (assignment) => assignment.student)
  assignments: Assignment[];
}
