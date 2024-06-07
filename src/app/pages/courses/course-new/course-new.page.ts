import {Component, OnInit} from '@angular/core';
import {CourseModel} from '../../../models/course/course.model'
import {Router} from '@angular/router'
import {UserService} from '../../../shared/user.service'
import {CourseService} from '../../../shared/course.service'
import {TeeboxModel} from '../../../models/course/teebox.model'
import {states} from '../../../shared/data/state.data'
import {UserModel} from '../../../models/user.model'

@Component({
  selector: 'app-course-new',
  templateUrl: './course-new.page.html',
  styleUrls: ['./course-new.page.scss'],
})
export class CourseNewPage implements OnInit {


  states = states;

  constructor(
    private router: Router,
    public courseService: CourseService,
  ) {
  }

  ngOnInit() {
    this.courseService.getNewCourse();
  }

  saveCourse(course) {
    this.courseService.addCourse(course);
    this.router.navigate(['/courses']);
  }

}
