import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { CourseService } from '../course.service';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-edit-course',
  templateUrl: './edit-course.page.html',
  styleUrls: ['./edit-course.page.scss'],
})
export class EditCoursePage implements OnInit {
  currentCourse: Course;
  courseId: string;

  courseSubscription: Subscription;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly courseService: CourseService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.courseId = this.route.snapshot.paramMap.get('courseId');
    this.courseService.getCourse(this.courseId);
  }

  ionViewWillEnter() {
    this.courseService.getCourse(this.courseId);
    this.currentCourse = this.courseService.currentCourse;
  }

  deleteCourse(): void {
    this.courseService.deleteCourse(this.courseId);
    this.router.navigateByUrl('course-list');
  }

  editCourse(): void {
    this.router.navigateByUrl(`course/edit/${this.courseId}`);
  }

  async onSubmit(form: NgForm) {
    console.log(form.value);
    await this.courseService.updateCourse(this.courseId, this.currentCourse);
    await this.router.navigateByUrl(`course/${this.courseId}`);
  }
}
