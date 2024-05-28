import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../shared/course.service'
import {CourseModel} from '../../models/course/course.model'
import {UserService} from '../../shared/user.service'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.page.html',
  styleUrls: ['./course-list.page.scss'],
})
export class CourseListPage implements OnInit {

  courses: CourseModel[] = [];
  state = 'MN';
  constructor(public courseService: CourseService, private userService: UserService) {
    this.state = this.userService.user()?.state || 'MN';
  }

  async ionViewWillEnter() {
    this.courseService.getCourses(this.state).subscribe(courses => {
      this.courses = courses.map(doc => {
        return doc as CourseModel;
      });
    });
  }

  ngOnInit() {
  }

}
