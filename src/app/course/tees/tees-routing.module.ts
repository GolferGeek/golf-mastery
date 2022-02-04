import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateTeesPage } from './create-tees/create-tees.page';
import { TeesDetailPage } from './tees-detail/tees-detail.page';
import { TeesListPage } from './tees-list/tees-list.page';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./tees-list/tees-list.module').then((m) => m.TeesListPageModule),
  },
  {
    path: 'new',
    loadChildren: () =>
      import('./create-tees/create-tees.module').then(
        (m) => m.CreateTeesPageModule
      ),
  },
  {
    path: ':teesId',
    loadChildren: () =>
      import('./tees-detail/tees-detail.module').then(
        (m) => m.TeesDetailPageModule
      ),
  },
  {
    path: 'edit/:teesId',
    loadChildren: () =>
      import('./edit-tees/edit-tees.module').then((m) => m.EditTeesPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeesRoutingModule {}
