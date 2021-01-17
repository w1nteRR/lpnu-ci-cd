import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateStudentDto } from './dto/create-student.dto';

@Controller('student')
export class StudentController {
    
    @Get()
    getAll() {}

    @Get(':id')
    getOne(@Param('id') id: string) {}

    @Post()
    createStudent(@Body() createStudentDto: CreateStudentDto) {}
}
