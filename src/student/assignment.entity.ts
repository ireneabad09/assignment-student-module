import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Student } from './student.entity';

@Entity()
export class Assignment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  dueDate: Date;

  @ManyToOne(() => Student, (student) => student.assignments, { onDelete: 'CASCADE' })
  student: Student;
}
