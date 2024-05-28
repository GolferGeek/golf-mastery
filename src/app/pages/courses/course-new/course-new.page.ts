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
  course: Partial<CourseModel> = {
    name: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',
    website: '',
    teeBoxes: [
      {name: 'red', par: 72, totalYards: 5500, womensSlope: 110, womensRating: 75, mensSlope: 110, mensRating: 75},
      {name: 'white', par: 72, totalYards: 6500, womensSlope: 120, womensRating: 70, mensSlope: 120, mensRating: 70 },
      {name: 'blue', par: 72, totalYards: 7000, womensSlope: 130, womensRating: 65, mensSlope: 130, mensRating: 65 }
    ],
  }
  user: UserModel = this.userService.user();

  constructor(
    public userService: UserService,
    private router: Router,
    private courseService: CourseService,
  ) {
  }

  ngOnInit() {
  }

  saveCourse() {
    this.courseService.addCourse(this.course);
    this.router.navigate(['/courses']);
  }

}
