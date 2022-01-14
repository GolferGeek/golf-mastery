import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Course } from '../course.model';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.scss'],
})
export class CourseDetailComponent implements OnInit {
  currentCourse$: Observable<Course>;

  constructor(
    private readonly route: ActivatedRoute,
    private readonly courseService: CourseService,
    private readonly router: Router
  ) {}

  ngOnInit() {
    const courseId: string = this.route.snapshot.paramMap.get('courseId');
    this.initializeCourse(courseId);
  }

  initializeCourse(courseId: string): void {
    this.currentCourse$ = this.courseService.getCourseDetail(courseId);
  }

  deleteCourse(courseId: string): void {
    this.courseService.deleteCourse(courseId);
    this.router.navigateByUrl('course');
  }
}
