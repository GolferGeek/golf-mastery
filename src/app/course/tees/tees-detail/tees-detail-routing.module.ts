import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TeesDetailPage } from './tees-detail.page';

const routes: Routes = [
  {
    path: '',
    component: TeesDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeesDetailPageRoutingModule {}
