import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  getAdditionalUserInfo,
  GoogleAuthProvider,
  signOut,
  OAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
  user,
  User as FirebaseUser,
} from '@angular/fire/auth';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

export interface User {
  uid: string;
  displayName: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  afUser$: Observable<FirebaseUser | null>;
  currentUserSubject: BehaviorSubject<User> = new BehaviorSubject<User>(null);
  currentUser$ = this.currentUserSubject.asObservable();
  currentUser: User;
  constructor(private auth: Auth, private router: Router) {
    this.afUser$ = user(auth);
    this.afUser$.subscribe((newUser) => {
      this.currentUserSubject.next(newUser);
    });
    this.currentUser$.subscribe(newCurrentUser => {
      this.currentUser = newCurrentUser;
    });
  }

  async emailLogin(email: string, password: string): Promise<any> {
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  async emailSignUp(email: string, password: string): Promise<void> {
    const credential = await createUserWithEmailAndPassword(
      this.auth,
      email,
      password
    );
    updateProfile(credential.user, {
      displayName: credential.user.displayName,
    });
    sendEmailVerification(credential.user);

    // create user in db
  }

  async resetPassword(email: string): Promise<any> {
    // sends reset password email
    sendPasswordResetEmail(this.auth, email);
  }

  async oAuthLogin(p: string): Promise<void> {
    // get provider, sign in
    const provider = new OAuthProvider(p);
    const credential = await signInWithPopup(this.auth, provider);
    const additionalInfo = getAdditionalUserInfo(credential);

    // create user in db
    if (additionalInfo?.isNewUser) {
    }
  }

  async googleLogin() {
    const provider = new GoogleAuthProvider();
    const credential = await signInWithPopup(this.auth, provider);
    const additionalInfo = getAdditionalUserInfo(credential);

    if (additionalInfo?.isNewUser) {

    }
    this.router.navigateByUrl('/home');
  }

  logout() {
    signOut(this.auth);
  }
}
