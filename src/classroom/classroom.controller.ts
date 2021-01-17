import { Body, Controller, Get, Param, Post } from '@nestjs/common'
import { ClassroomService } from './classroom.service'
import { CreateClassroomDto } from './dto/create-classroom.dto'

@Controller('classroom')
export class ClassroomController {

	constructor(private readonly classroomService: ClassroomService) {}

  	@Get()
  	getAll() {
    	return this.classroomService.getAll()
	}

	@Get(':id')
	getOne(@Param('id') id: string) {
		return this.classroomService.getById(parseInt(id))
	}

	@Post()
	createClassroom(@Body() createClassroomDto: CreateClassroomDto) {
		return this.classroomService.create(createClassroomDto)
	}
}
