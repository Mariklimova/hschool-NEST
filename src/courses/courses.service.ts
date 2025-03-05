import { Injectable } from '@nestjs/common';
import courses from 'src/storage/courses';

interface iCourses {
  id: number,
  name: string,
  duration: string,
  teacher: string
}

@Injectable()
export class CoursesService {
  getAll(): iCourses[] {
    return courses;
  }
}
