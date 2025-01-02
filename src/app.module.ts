import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StudentModule } from './student/student.module';
import { Student } from './student/student.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Change to your database type (e.g., 'postgres')
      host: 'localhost',
      port: 3306, // Default port for MySQL
      username: 'your_username', // Replace with your DB username
      password: 'your_password', // Replace with your DB password
      database: 'student_db', // Replace with your database name
      entities: [Student],
      synchronize: true, // Auto-create tables; set to false in production
    }),
    StudentModule,
  ],
})
export class AppModule {}
