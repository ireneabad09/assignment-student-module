import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common'; // Correct NestJS imports
import { StudentService } from './student.service'; // Import the StudentService
import { CreateStudentDto } from './dto/create-student.dto'; // Import Create DTO
import { UpdateStudentDto } from './dto/update-student.dto'; // Import Update DTO

@Controller('students') // Base route: /students
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // Create a new student
  @Post()
  create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentService.create(createStudentDto);
  }

  // Get all students
  @Get()
  findAll() {
    return this.studentService.findAll();
  }

  // Get a specific student by ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.studentService.findOne(+id); // +id converts string to number
  }

  // Update a student's details
  @Put(':id')
  update(@Param('id') id: string, @Body() updateStudentDto: UpdateStudentDto) {
    return this.studentService.update(+id, updateStudentDto); // +id converts string to number
  }

  // Delete a student by ID
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.studentService.remove(+id); // +id converts string to number
  }
}
