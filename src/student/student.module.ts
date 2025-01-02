import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { AssignmentController } from './assignment.controller';
import { Student } from './student.entity';
import { Assignment } from './assignment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Student, Assignment])],
  controllers: [StudentController, AssignmentController],
  providers: [StudentService],
})
export class StudentModule {}
