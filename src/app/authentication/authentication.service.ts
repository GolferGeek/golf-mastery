import { NgPluralCase } from '@angular/common';
import { Injectable } from '@angular/core';
import {
  Auth,
  User as AuthUser,
  authState,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from '@angular/fire/auth';
import { doc, docData, Firestore } from '@angular/fire/firestore';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  authState$: Observable<AuthUser>;
  user$: Observable<AuthUser>;
  isLoggedIn: boolean = this.auth.currentUser && true;
  isLoggedOut = !this.isLoggedIn;

  constructor(private readonly auth: Auth, private firestore: Firestore) {
    this.isLoggedIn = this.auth.currentUser && true;
    this.isLoggedOut = !this.isLoggedIn;
    this.authState$ = authState(auth);
    this.authState$.subscribe((authUser: AuthUser) => {
      if (authUser) {
        this.isLoggedIn = true;
        this.isLoggedOut = false;
      } else {
        this.isLoggedIn = false;
        this.isLoggedOut = true;
      }
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
