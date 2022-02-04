import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeesListPage } from './tees-list.page';

const routes: Routes = [
  {
    path: '',
    component: TeesListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeesListPageRoutingModule {}
