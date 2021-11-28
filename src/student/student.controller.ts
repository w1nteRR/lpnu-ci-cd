import { Body, Controller, Get, Param } from '@nestjs/common'

import { CreateStudentDto } from './dto/create-student.dto'
import { StudentService } from './student.service'

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getAll() {
    return this.studentService.getAll()
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return this.studentService.getById(parseInt(id))
  }

  // @Post()
  // createStudent(@Body() createStudentDto: CreateStudentDto) {
  //   return this.studentService.create(createStudentDto)
  // }
}
