import { Controller, Post, Param, Body } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('assignments')
export class AssignmentController {
  constructor(private readonly studentService: StudentService) {}

  // Create an assignment for a specific student
  @Post(':studentId')
  async createAssignment(
    @Param('studentId') studentId: number,
    @Body() assignmentData: any,
  ) {
    // This will now work because createAssignmentForStudent exists in StudentService
    return this.studentService.createAssignmentForStudent(studentId, assignmentData);
  }
}
