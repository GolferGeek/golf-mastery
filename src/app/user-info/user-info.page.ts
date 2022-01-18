import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserInfoService } from './user-info.service';
// import { UserCredential } from '../authentication.model';

@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.page.html',
  styleUrls: ['./user-info.page.scss'],
})
export class UserInfoPage implements OnInit {

  public userInfoForm: FormGroup;
  constructor(private readonly formBuilder: FormBuilder, private userInfoService: UserInfoService, private router: Router) {}
  ngOnInit() {
    this.initializeForm();
  }
  initializeForm(): void {
    this.userInfoForm = this.formBuilder.group({
      email: [this.userInfoService.userInfo.email, Validators.compose([Validators.required, Validators.email])],
      userName: [''],
      firstName: [''],
      lastName: [''],
      phone: [''],
      pictureUrl: [''],
      isCoach: [false]
    });
  }

  updateUserInfo (authForm: FormGroup): void {
    if (!authForm.valid) {
      console.log('Form is not valid yet, current value:', authForm.value);
    } else {
      const credentials = {
        email: authForm.value.email,
        userName: authForm.value.userName,
        firstName: authForm.value.firstName,
        lastName: authForm.value.lastName,
        phone: authForm.value.phone,
        pictureUrl: authForm.value.pictureUrl,
        isCoach: authForm.value.isCoach,
      };
      this.userInfoService.setUserInfo(credentials);
      this.router.navigateByUrl('home');
    }
  }
}
