import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedOutGuard implements CanActivate {
  constructor(private readonly authService: AuthenticationService, private readonly router: Router) {}
  canActivate(): Promise<boolean | UrlTree> {
    setTimeout(() => {}, 400);
    return new Promise((resolve, reject) => {
      if (!this.authService.isLoggedIn) {
        resolve(true);
      } else {
        reject('user logged in');
        this.router.navigateByUrl('/home');
      }
    });
  }
}
