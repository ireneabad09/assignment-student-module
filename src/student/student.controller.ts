// student.controller.ts

import { Controller, Put, Param, Body } from '@nestjs/common';
import { StudentService } from './student.service';
import { Student } from './student.entity';

@Controller('students')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  // Other routes (GET, POST, etc.) go here...

  @Put(':id')
  async updateStudent(
    @Param('id') id: number, 
    @Body() updateData: Partial<Student>,
  ) {
    return this.studentService.update(id, updateData);
  }
}
