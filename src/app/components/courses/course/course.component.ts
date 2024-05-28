import { Component, Input, OnInit } from '@angular/core';
import { CourseModel  } from '../../../models/course/course.model';
import { states } from '../../../shared/data/state.data';
import { UserModel } from 'src/app/models/user.model';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
})
export class CourseComponent implements OnInit {
  @Input() course: Partial<CourseModel>;
  @Input() readonly: boolean = true;
  @Input() user: UserModel

  states = states;

  constructor() { }

  ngOnInit() {}

}
