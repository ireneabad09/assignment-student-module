import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Student } from './student.entity';
import { Assignment } from './assignment.entity'; // Import the Assignment entity

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private readonly studentRepository: Repository<Student>,
    @InjectRepository(Assignment)
    private readonly assignmentRepository: Repository<Assignment>, // Add the Assignment repository here
  ) {}

  async create(student: Student) {
    // Check if the email already exists
    const existingStudent = await this.studentRepository.findOne({
      where: { email: student.email },
    });
    if (existingStudent) {
      throw new ConflictException('Email already exists');
    }

    // If no duplicate email, save the student
    return this.studentRepository.save(student);
  }

  findAll() {
    return this.studentRepository.find({
      order: { id: 'ASC' }, // or 'DESC' for descending order
    });
  }
  
  findOne(id: number) {
    return this.studentRepository.findOne({
      where: { id },
      relations: ['assignments'], // Ensure to load assignments as well
    });
  }

  async createAssignmentForStudent(studentId: number, assignmentData: any) {
    // Fetch the student by ID
    const student = await this.studentRepository.findOne({
      where: { id: studentId },
    });
  
    if (!student) {
      throw new Error('Student not found');
    }
  
    // Create a single assignment, ensure assignmentData is a single object, not an array
    const assignment = this.assignmentRepository.create(assignmentData);
    
    // Log the assignment before saving
    console.log('Assignment created:', assignment);
    console.log('Assignment Data:', assignmentData);

    // If assignment is an array, just use the first element
    if (Array.isArray(assignment)) {
      console.error('Unexpected array of assignments');
      return;
    }
  
  
    // Save the assignment
    return await this.assignmentRepository.save(assignment);
  }
}  