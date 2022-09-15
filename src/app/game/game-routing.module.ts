import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditPage } from './edit/edit.page';
import { NewPage } from './new/new.page';

const routes: Routes = [
  {
    path: '',
    component: NewPage,
  },
  {
    path: 'edit/:id',
    component: EditPage,
  },
  {
    path: 'view/:id',
    component: EditPage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditPageRoutingModule {}
