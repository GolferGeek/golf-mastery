import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CourseListPage } from './course-list.page';
import { CourseEditPage } from './course-edit/course-edit.page';
import { CourseDetailPage } from './course-detail/course-detail.page';
import { CourseNewPage } from './course-new/course-new.page';

const routes: Routes = [
  {
    path: '',
    component: CourseListPage,
  },
  {
    path: 'new-course',
    component: CourseNewPage,
  },
  {
    path: 'edit-course/:id',
    component: CourseEditPage,
  },
  {
    path: 'course-detail/:id',
    component: CourseDetailPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesRoutingModule {}
