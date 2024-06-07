import { Component, OnInit } from '@angular/core';
import {CourseService} from '../../shared/course.service'
import {UserService} from '../../shared/user.service'

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.page.html',
  styleUrls: ['./course-list.page.scss'],
})
export class CourseListPage implements OnInit {

  state = 'MN';
  constructor(public courseService: CourseService, private userService: UserService) {
    this.state = this.userService.user()?.state || 'MN';
  }

  async ionViewWillEnter() {
    this.courseService.getCourses(this.state);
  }

  ngOnInit() {
  }

}
