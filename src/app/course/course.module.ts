import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursePageRoutingModule } from './course-routing.module';

import { CourseListPage } from './course-list/course-list.page';
import { CreateCourseComponent } from './create-course/create-course.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { MaintainScoreCardComponent } from './components/score-card/maintain-score-card/maintain-score-card.component';
import { EditCoursePage } from './edit-course/edit-course.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursePageRoutingModule
  ],
  declarations: [CourseListPage, CreateCourseComponent, EditCoursePage, CourseDetailComponent, MaintainScoreCardComponent]
})
export class CoursePageModule {}
