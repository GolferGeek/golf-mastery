import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course } from '../models/course.model';
import { CourseService } from '../course.service';
import { Form, NgForm } from '@angular/forms';
import { PracticeAreaType } from '../models/practice-area.model';

@Component({
  selector: 'app-create-course',
  templateUrl: './create-course.component.html',
  styleUrls: ['./create-course.component.scss'],
})
export class CreateCourseComponent implements OnInit {
  course: Course;

  constructor(private readonly router: Router,
    private readonly courseService: CourseService) {
    this.course = {
      id: '',
      name: '',
      description: '',
      website: '',
      notes: '',
      street: '',
      city: '',
      state: '',
      zip: '',
      phone: '',
      practiceAreas: [],
      scoreCard: {teeSet: []}
    }
  }

  ngOnInit() {}

  async onSubmit(form: NgForm) {
    console.log(form.value);
    await this.courseService.createCourse(this.course);
    await this.router.navigateByUrl('course');
  }
}
