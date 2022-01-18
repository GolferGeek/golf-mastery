import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'firebase/auth';
import { AuthenticationService } from './authentication/authentication.service';
import { UserInfoService } from './user-info/user-info.service';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  user: User;
  constructor(public readonly authService: AuthenticationService, private readonly userInfoService: UserInfoService, private readonly router: Router) {
  }

  logout() {
    this.authService.logout();
  }

  login() {
    this.router.navigateByUrl('login');
  }
}
