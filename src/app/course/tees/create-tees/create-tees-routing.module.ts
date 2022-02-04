import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreateTeesPage } from './create-tees.page';

const routes: Routes = [
  {
    path: '',
    component: CreateTeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreateTeesPageRoutingModule {}
