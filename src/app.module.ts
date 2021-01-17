import { Module } from '@nestjs/common';


import { ClassroomModule } from './classroom/classroom.module';
import { StudentModule } from './student/student.module';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  imports: [ClassroomModule, StudentModule, ScheduleModule],
  controllers: [],
  providers: []
})
export class AppModule {}
