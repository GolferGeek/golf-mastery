import { Component } from '@angular/core';
import { Course } from './course.model';
import { CourseService } from './course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.page.html',
  styleUrls: ['./course.page.scss'],
})
export class CoursePage {
  readonly courseList$ = this.courseService.courses$;
  constructor(private readonly courseService: CourseService) { }
}
