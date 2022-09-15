import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../shared/auth.service';
import { AuthService } from '../shared/auth.service';

@Component({
  selector: 'app-left-nav',
  templateUrl: './left-nav.component.html',
  styleUrls: ['./left-nav.component.scss'],
})
export class LeftNavComponent implements OnInit {
  currentUser: User;
  constructor(public authService: AuthService, private router: Router) {
    authService.currentUser$.subscribe(newUser => {
      this.currentUser = newUser;
    });
  }

  ngOnInit() {}

  login() {
    this.router.navigateByUrl('login');
  }

  logout() {
    this.authService.logout();
  }
}
