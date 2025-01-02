import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentService } from './student.service';
import { StudentController } from './student.controller';
import { Student } from './student.entity';
import { Assignment } from './assignment.entity'; // Ensure this import path is correct

@Module({
  imports: [TypeOrmModule.forFeature([Student, Assignment])], // Register both Student and Assignment entities
  controllers: [StudentController],
  providers: [StudentService],
})
export class StudentModule {}
