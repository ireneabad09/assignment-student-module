import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';
import { Assignment } from './student/assignment.entity';  // Import Assignment entity

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',  // Use your actual MySQL password
      database: 'student_db',
      entities: [Student, Assignment],  // Register both entities
      synchronize: true,  // Ensure this is true during development to auto-create tables
    }),
    StudentModule,
  ],
})
export class AppModule {}
