import { Injectable } from '@nestjs/common';
import { CreateClassroomDto } from './dto/create-classroom.dto';

@Injectable()
export class ClassroomService {

    getAll() {}

    getById(id: number) {}

    createClassroom(classroom: CreateClassroomDto) {}
}
