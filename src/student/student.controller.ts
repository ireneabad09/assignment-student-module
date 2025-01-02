import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // Create a new student
  @Post()
  create(@Body() student: Student) {
    return this.studentService.create(student);
  }

  // Get all students
  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  // Get a single student by ID
  @Get(':id')
  findOne(@Param('id') id: string) { // Change to string to avoid errors with type casting
    return this.studentService.findOne(Number(id)); // Convert id to number in the service
  }
}
