import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Assignment } from './assignment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Assignment])],
  controllers: [], // Add controllers if needed
  providers: [], // Add services if needed
  exports: [TypeOrmModule],
})
export class AssignmentModule {}
