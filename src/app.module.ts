import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm'

import { ClassroomModule } from './classroom/classroom.module';
import { StudentModule } from './student/student.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(), 
    ClassroomModule, 
    StudentModule, 
    ScheduleModule
  ],
  controllers: [],
  providers: []
})
export class AppModule {
  constructor(private connection: Connection) {}
}
