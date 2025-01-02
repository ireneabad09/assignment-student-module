// student.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  // Other methods (create, findAll, etc.) go here...

  async update(id: number, updateData: Partial<Student>) {
    const student = await this.studentRepository.findOne({ where: { id } });

    if (!student) {
      throw new NotFoundException('Student not found');
    }

    // Update student fields
    Object.assign(student, updateData);

    // Save the updated student to the database
    return this.studentRepository.save(student);
  }
}
