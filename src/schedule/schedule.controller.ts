import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateScheduleDto } from './dto/create-schedule.dto';

@Controller('schedule')
export class ScheduleController {
    @Get()
  	getAll() {}

	@Get(':id')
	getOne(@Param('id') id: string) {}

	@Post()
	createClassroom(@Body() createScheduleDto: CreateScheduleDto) {}
}
