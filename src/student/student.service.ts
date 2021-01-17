import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './dto/create-student.dto';
import { Students } from './student.entity';

@Injectable()
export class StudentService {
    constructor(@InjectRepository(Students) private readonly studentsRepository: Repository<Students>) {}

    getAll(): Promise<Array<Students>> {
        return this.studentsRepository.find()
    }

    getById(id: number): Promise<Students> {
        return this.studentsRepository.findOne(id)
    }

    create(studentDto: CreateStudentDto): Promise<Students> {
        const student = new Students()

        student.first_name = studentDto.first_name
        student.second_name = studentDto.second_name

        return this.studentsRepository.save(student)
    }
}
