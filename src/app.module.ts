import { Module } from '@nestjs/common';
import { StudModule } from './students/students.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [StudModule,CoursesModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
