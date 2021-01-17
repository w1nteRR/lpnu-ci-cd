import { Injectable } from '@nestjs/common';
import { CreateClassroomDto } from './dto/create-classroom.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Classrooms } from './classroom.entity';


@Injectable()
export class ClassroomService {

    constructor(@InjectRepository(Classrooms) private readonly classroomRepository: Repository<Classrooms>) {}

    getAll(): Promise<Array<Classrooms>> {
        return this.classroomRepository.find()
    }

    getById(id: number): Promise<Classrooms> {
        return this.classroomRepository.findOne(id)
    }

    create(classroomDto: CreateClassroomDto): Promise<Classrooms> {
        const classroom = new Classrooms()

        classroom.number = classroomDto.number
        classroom.roominess = classroomDto.number

        return this.classroomRepository.save(classroom);
    }
}
