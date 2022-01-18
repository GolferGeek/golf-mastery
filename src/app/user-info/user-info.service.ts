import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { onAuthStateChanged } from 'firebase/auth';
import { UserInfo } from './user-info.model';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../authentication/authentication.service';
import { addDoc, collection, doc, docData, Firestore } from '@angular/fire/firestore';
import { setDoc } from 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  userInfo: UserInfo;

  constructor(
    private authService: AuthenticationService,
    private auth: Auth,
    private firestore: Firestore
  ) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        this.getUserInfo(user.uid).subscribe((userInfo) => {
          if (userInfo) {
            this.userInfo = userInfo;
          } else {
            this.userInfo = {
              id: user.uid,
              email: user.email,
              userName: user.displayName,
              firstName: '',
              lastName: '',
              phone: user.phoneNumber,
              pictureUrl: user.photoURL,
              isCoach: false,
            };
            this.createUserInfo(this.userInfo)
          }
        });
      } else {
      }
    });
  }

  getUserInfo(id: string): Observable<UserInfo> {
    const userRef = doc(this.firestore, 'users/${id}');
    return docData(userRef, {
      idField: 'id',
    }) as unknown as Observable<UserInfo>;
  }

  createUserInfo(userInfo: UserInfo) {
    const userDoc = doc(this.firestore, `users/${userInfo.id}`);
    setDoc(userDoc, userInfo);
  }

  setUserInfo(userInfo: Partial<UserInfo>) {
    const userDoc = doc(this.firestore, `users/${this.userInfo.id}`);
    const newUserInfo: UserInfo = { id: this.userInfo.id, ...userInfo };
    this.userInfo = newUserInfo;
    setDoc(userDoc, newUserInfo);
  }
}
