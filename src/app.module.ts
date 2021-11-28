import { Module } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Connection } from 'typeorm'

import { ClassroomModule } from './classroom/classroom.module'
import { StudentModule } from './student/student.module'
import { ScheduleModule } from './schedule/schedule.module'
import { Students } from './student/student.entity'
import { Classrooms } from './classroom/classroom.entity'
import { Schedules } from './schedule/schedule.entity'

@Module({
  imports: [
    // TypeOrmModule.forRoot({
    //   type: 'mysql',
    //   host: 'localhost',
    //   port: 3306,
    //   username: 'root',
    //   password: 'admin',
    //   database: 'test',
    //   entities: [Students, Classrooms, Schedules]

    // }),
    // ClassroomModule,
    StudentModule,
    // ScheduleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  // constructor(private connection: Connection) {}
}
