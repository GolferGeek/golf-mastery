import { Component } from '@angular/core';
import { Course } from '../models/course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course-list.page.html',
  styleUrls: ['./course-list.page.scss'],
})
export class CourseListPage {
  readonly courseList$ = this.courseService.courses$;
  constructor(private readonly courseService: CourseService) { }
}
