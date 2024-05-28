import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CoursesRoutingModule } from './courses-routing.module';
import {CourseListPage} from './course-list.page'
import { TeeBoxComponent } from 'src/app/components/courses/tee-box/tee-box.component';
import { CourseComponent } from 'src/app/components/courses/course/course.component';
import { CourseEditPage } from './course-edit/course-edit.page';
import { CourseNewPage } from './course-new/course-new.page';


@NgModule({
  declarations: [CourseListPage, CourseEditPage, CourseNewPage, TeeBoxComponent, CourseComponent],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CoursesRoutingModule
  ],
})
export class CoursesModule {}
