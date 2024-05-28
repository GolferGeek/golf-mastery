import {Component, OnInit, signal} from '@angular/core';
import {CourseModel} from '../../../models/course/course.model'
import {ActivatedRoute, Router} from '@angular/router'
import {states} from '../../../shared/data/state.data'
import {CourseService} from '../../../shared/course.service'
import {UserService} from '../../../shared/user.service'

@Component({
  selector: 'app-course-edit',
  templateUrl: './course-edit.page.html',
  styleUrls: ['./course-edit.page.scss'],
})
export class CourseEditPage implements OnInit {
  states = states;
  selectedId: string;
  course = signal<CourseModel>(null)
  user = this.userService.user();

  constructor(
    private route: ActivatedRoute,
    private courseService: CourseService,
    public userService: UserService,
    private router: Router) {

  }

  ngOnInit() {
    this.selectedId = this.route.snapshot.paramMap.get('id');
    this.courseService.getCourse(this.selectedId).then(foundCourse =>
      this.course.set(foundCourse)
    );
  }

  async saveCourse() {
    await this.courseService.updateCourse(this.course());
    this.router.navigate(['/courses']);
  }

}
