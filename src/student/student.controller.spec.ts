import { Test, TestingModule } from '@nestjs/testing'

import { StudentController } from './student.controller'
import { StudentService } from './student.service'

import { CreateStudentDto } from './dto/create-student.dto'

describe('StudentController', () => {
  let studentController: StudentController

  const mockStudentService = {
    create: jest.fn((dto) => {
      return {
        id: Date.now(),
        ...dto,
      }
    }),
    getById: jest.fn().mockImplementation(() => {
      return {
        id: 0,
        first_name: 'Mykola',
        second_name: 'Vatamaniuk',
      }
    }),
    getAll: jest.fn().mockImplementation(() => {
      return {
        students: [],
      }
    }),
  }

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentController],
      providers: [StudentService],
    })
      .overrideProvider(StudentService)
      .useValue(mockStudentService)
      .compile()

    studentController = module.get<StudentController>(StudentController)
  })

  const studentExpect = {
    id: expect.any(Number),
    first_name: expect.any(String),
    second_name: expect.any(String),
  }

  const studentsExpect = {
    students: expect.any(Array),
  }

  it('should be defined', () => {
    expect(studentController).toBeDefined()
  })

  it('shoud create student', () => {
    const dto: CreateStudentDto = {
      id: 0,
      first_name: 'Mykola',
      second_name: 'Vatamamiuk',
    }

    expect(studentController.createStudent(dto)).toEqual(studentExpect)
  })

  it('should find a single student', () => {
    const id = '0'

    expect(studentController.getOne(id)).toEqual(studentExpect)
  })

  it('should return array of students', () => {
    expect(studentController.getAll()).toEqual(studentsExpect)
  })
})
