import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthenticationPage } from './authentication/authentication.page';
import { LoggedInGuard } from './authentication/guards/logged-in.guard';
import { LoggedOutGuard } from './authentication/guards/logged-out.guard';
import { HomePage } from './home/home.page';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomePage,
  },
  {
    path: 'login',
    component: AuthenticationPage,
    canActivate: [LoggedOutGuard],
  },
  {
    path: 'signup',
    component: AuthenticationPage,
    canActivate: [LoggedOutGuard],
  },
  {
    path: 'reset',
    component: AuthenticationPage,
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
