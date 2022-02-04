import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseDetailComponent } from './course-detail/course-detail.component';

import { CourseListPage } from './course-list/course-list.page';
import { CreateCourseComponent } from './create-course/create-course.component';

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
    loadChildren: () =>
      import('./edit-course/edit-course.module').then(
        (m) => m.EditCoursePageModule
      ),
  },
  {
    path: ':courseId/tees',
    loadChildren: () =>
      import('./tees/tees.module').then(
        (m) => m.TeesModule
      ),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursePageRoutingModule {}
