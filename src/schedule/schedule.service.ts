import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateScheduleDto } from './dto/create-schedule.dto';
import { Schedules } from './schedule.entity';

@Injectable()
export class ScheduleService {
    constructor(@InjectRepository(Schedules) private readonly classroomRepository: Repository<Schedules>) {}

    getAll(): Promise<Array<Schedules>> {
        return this.classroomRepository.find()
    }

    getById(id: number): Promise<Schedules> {
        return this.classroomRepository.findOne(id)
    }

    create(scheduleDto: CreateScheduleDto): Promise<Schedules> {
        const schedule = new Schedules()

        schedule.day_ = scheduleDto.day_
        schedule.subject = scheduleDto.subject
        schedule.time = scheduleDto.time

        return this.classroomRepository.save(schedule)
    }
}
