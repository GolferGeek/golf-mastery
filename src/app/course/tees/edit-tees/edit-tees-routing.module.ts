import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTeesPage } from './edit-tees.page';

const routes: Routes = [
  {
    path: '',
    component: EditTeesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTeesPageRoutingModule {}
