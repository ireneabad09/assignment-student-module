import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Student } from './student.entity';

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  dueDate: Date;

  // Add the ManyToOne relationship with Student
  @ManyToOne(() => Student, (student) => student.assignments)
  @JoinColumn({ name: 'studentId' }) // Optional, specify the name of the foreign key column
  student: Student;
}
