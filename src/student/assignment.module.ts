import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assignment } from './assignment.entity';
import { AssignmentController } from './assignment.controller';
import { StudentService } from './student.service';  // Ensure StudentService is imported

@Module({
  imports: [TypeOrmModule.forFeature([Assignment])],
  controllers: [AssignmentController],
  providers: [StudentService],  // Ensure StudentService is provided here
})
export class AssignmentModule {}
