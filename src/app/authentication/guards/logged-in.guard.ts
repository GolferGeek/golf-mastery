import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Injectable({
  providedIn: 'root',
})
export class LoggedInGuard implements CanActivate {
  constructor(private readonly authService: AuthenticationService, private readonly router: Router) {}
  canActivate(): Promise<boolean | UrlTree> {
    return new Promise((resolve, reject) => {
      if (this.authService.isLoggedIn) {
        resolve(true);
      } else {
        reject('No user logged in');
        this.router.navigateByUrl('/login');
      }
    });
  }
}
