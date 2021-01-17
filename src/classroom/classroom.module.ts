import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClassroomController } from './classroom.controller';
import { Classrooms } from './classroom.entity';
import { ClassroomService } from './classroom.service';

@Module({
    imports: [TypeOrmModule.forFeature([Classrooms])],
    providers: [ClassroomService],
    controllers: [ClassroomController]
})

export class ClassroomModule {}