import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../models/course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  currentCourse: Course;
  courseId: string;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly courseService: CourseService,
    private readonly router: Router
  ) {
  }

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
  Í;

  navigateToTees() {
    this.router.navigateByUrl(`course/${this.courseId}/tees`);
  }
}
