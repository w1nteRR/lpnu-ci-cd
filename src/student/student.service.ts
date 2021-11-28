import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CreateStudentDto } from './dto/create-student.dto'
import { Students } from './student.entity'

@Injectable()
export class StudentService {
  // constructor(@InjectRepository(Students) private readonly studentsRepository: Repository<Students>) {}

  getAll(): Array<Students> {
    const students: Array<Students> = [
      {
        id: 0,
        first_name: 'John',
        second_name: 'Wick',
      },
      {
        id: 1,
        first_name: 'Jo',
        second_name: 'Barbara',
      },
    ]

    return students
  }

  getById(id: number): Students {
    return {
      id: 0,
      first_name: 'John',
      second_name: 'Wick',
    }
  }

  // create(studentDto: CreateStudentDto): Promise<Students> {
  //     const student = new Students()

  //     student.first_name = studentDto.first_name
  //     student.second_name = studentDto.second_name

  //     return this.studentsRepository.save(student)
  // }
}
