import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';
import { Assignment } from './student/assignment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // Change to 'root' or your actual MySQL username
      password: '1234', // Set the correct password
      database: 'student_db',
      entities: [Student, Assignment],
      synchronize: true,
    }),
    StudentModule,
  ],
})
export class AppModule {}
