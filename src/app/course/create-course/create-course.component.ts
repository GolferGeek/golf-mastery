import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
})
export class CreateCourseComponent implements OnInit {
  name: string;

  constructor(private readonly router: Router,
  private readonly courseService: CourseService) { }

  ngOnInit() {}

  async createCourse(course: Partial<Course>) {
    await this.courseService.createCourse(course);
    console.log(course);
    await this.router.navigateByUrl('course');
  }
  isValidForm(): boolean {
    return this.name && true;
  }
}
