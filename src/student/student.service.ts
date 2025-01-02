import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
  ) {}

  // Create a new student
  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentRepository.create(createStudentDto);
    return this.studentRepository.save(student);
  }

  // Get all students
  findAll(): Promise<Student[]> {
    return this.studentRepository.find();
  }

  // Get a specific student by ID
  findOne(id: number): Promise<Student> {
    return this.studentRepository.findOne({ where: { id } });
  }

  // Update a student's details
  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
    const student = await this.findOne(id);
    if (!student) {
      throw new Error(`Student with ID ${id} not found`);
    }
    await this.studentRepository.update(id, updateStudentDto);
    return this.findOne(id);
  }

  // Delete a student by ID
  async remove(id: number): Promise<void> {
    const student = await this.findOne(id);
    if (!student) {
      throw new Error(`Student with ID ${id} not found`);
    }
    await this.studentRepository.remove(student);
  }
}
