import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { CanActivate, Router, UrlTree } from '@angular/router';
import { onAuthStateChanged } from 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class LoggedOutGuard implements CanActivate {
  constructor(private auth: Auth, private readonly router: Router) {}
  canActivate(): Promise<boolean | UrlTree> {
    return new Promise((resolve, reject) => {
      onAuthStateChanged(this.auth, (user) => {
        if (!user) {
          resolve(true);
        } else {
          reject('User logged in');
          this.router.navigateByUrl('/home');
        }
      });
    });
  }
}
