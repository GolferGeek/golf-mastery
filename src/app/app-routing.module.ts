import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoggedInGuard } from './authentication/guards/logged-in.guard';
import { LoggedOutGuard } from './authentication/guards/logged-out.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationPageModule
      ),
    canActivate: [LoggedOutGuard],
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationPageModule
      ),
    canActivate: [LoggedOutGuard],
  },
  {
    path: 'reset',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationPageModule
      ),
    canActivate: [LoggedOutGuard],
  },
  {
    path: 'course',
    loadChildren: () =>
      import('./course/course.module').then((m) => m.CoursePageModule),
    canActivate: [LoggedInGuard],
  },
  {
    path: 'course/:courseId',
    loadChildren: () =>
      import('./course/course.module').then((m) => m.CoursePageModule),
    canActivate: [LoggedInGuard],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
