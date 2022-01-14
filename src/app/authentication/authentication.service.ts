import { Injectable } from '@angular/core';
import {
  Auth,
  authState,
  createUserWithEmailAndPassword,
  getIdTokenResult,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  User,
  UserCredential,
} from '@angular/fire/auth';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authState$;
  user: User = this.auth.currentUser;
  isLoggedIn: boolean = this.auth.currentUser && true;
  isLoggedOut = !this.isLoggedIn;
  pictureUrl = '';

  constructor(private readonly auth: Auth) {
    this.user = this.auth.currentUser;
    this.isLoggedIn = this.auth.currentUser && true;
    this.isLoggedOut = !this.isLoggedIn;
    this.pictureUrl = '';
    this.authState$ = authState(auth);
    this.authState$.subscribe((user) => {
      this.user = user;
      // getIdTokenResult(this.user) // this.auth.idTokenResult
      //   .then((token) => {
      //     this.roles = (token?.claims as unknown as UserRoles) ?? {
      //       admin: false,
      //     };
      //     this.jwtToken = token.token;
      //   });
      this.isLoggedIn = !!user;
      this.isLoggedOut = !this.isLoggedIn;
      this.pictureUrl = user ? user.photoURL : null;
    });
  }

  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  signup(email: string, password: string): Promise<UserCredential> {
    return createUserWithEmailAndPassword(this.auth, email, password);
  }
  resetPassword(email: string): Promise<void> {
    return sendPasswordResetEmail(this.auth, email);
  }
  logout(): Promise<void> {
    return signOut(this.auth);
  }
}
