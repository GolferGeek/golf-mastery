import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailComponent } from './course-detail/course-detail.component';

import { CourseListPage } from './course-list/course-list.page';
import { CreateCourseComponent } from './create-course/create-course.component';
import { EditCoursePage } from './edit-course/edit-course.page';

const routes: Routes = [
  {
    path: '',
    component: CourseListPage,
  },
  {
    path: 'new',
    component: CreateCourseComponent,
  },
  {
    path: ':courseId',
    component: CourseDetailComponent,
  },
  {
    path: 'edit/:courseId',
    component: EditCoursePage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursePageRoutingModule {}
