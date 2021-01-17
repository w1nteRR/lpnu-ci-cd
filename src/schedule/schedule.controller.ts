import { Body, Controller, Get, Param, Post } from '@nestjs/common';

import { CreateScheduleDto } from './dto/create-schedule.dto';
import { ScheduleService } from './schedule.service';

@Controller('schedule')
export class ScheduleController {

	constructor(private readonly scheduleService: ScheduleService) {}

    @Get()
  	getAll() {
		return this.scheduleService.getAll()
	}

	@Get(':id')
	getOne(@Param('id') id: string) {
		return this.scheduleService.getById(parseInt(id))
	}

	@Post()
	createClassroom(@Body() createScheduleDto: CreateScheduleDto) {
		return this.scheduleService.create(createScheduleDto)
	}
}
