import { Component, EventEmitter, Input, OnInit, Output, WritableSignal } from '@angular/core';
import { CourseModel  } from '../../../models/course/course.model';
import { states } from '../../../shared/data/state.data';
import { UserService } from 'src/app/shared/user.service';
import { CourseService } from 'src/app/shared/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  @Input() readonly: boolean = true;
  @Output() saveCourseEvent = new EventEmitter<CourseModel>();

  states = states;
  course: CourseModel = null;

  constructor(public courseService: CourseService) {
    courseService.course$.subscribe(course => {
      this.course = course;
    });
  }

  saveCourse(course: CourseModel) {
    this.saveCourseEvent.emit(course);
  }

  ngOnInit() {}

}
