import { Controller, Get } from '@nestjs/common';
import { CoursesService } from './courses.service';

interface iCourses {
  id: number,
  name: string,
  duration: string,
  teacher: string
}

@Controller('/courses')
export class CoursesController {
  constructor(private readonly appService: CoursesService) {}

  @Get()
  getAll(): iCourses[] {
    return this.appService.getAll();
  }
}
