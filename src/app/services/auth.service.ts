import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, UserCredential, updateProfile } from '@angular/fire/auth';
import { Observable, of as observableOf } from 'rxjs';

import { User } from '../models/user';

export const FIREBASE_AUTH_OK: string = '';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isSignedIn: boolean = false;
  private isAnonymous: boolean = true;
  private user: User = {} as User;

  constructor(
    private auth: Auth
  ) {
    onAuthStateChanged(auth, user => {
      if (user && !user.isAnonymous) {
        this.isSignedIn = true;
        this.isAnonymous = false;
        this.user.displayName = user.displayName!;
        this.user.uid = user.uid;
      } else {
        this.isSignedIn = false;
        this.isAnonymous = true;
        this.user = {} as User;
      }
    });
  }

  signup(displayName: string, email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, password)
    .then((userCredential: UserCredential) => {
      this.user.displayName = displayName;
      this.user.uid = userCredential.user.uid;
      updateProfile(userCredential.user, {displayName});
    })
    .then(() => {
      this.isSignedIn = true;
      return FIREBASE_AUTH_OK;
    })
    .catch(error => {
      this.isSignedIn = false;
      this.user = {} as User;
      return error;
    })
  }

  login(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        this.isSignedIn = true;
        return FIREBASE_AUTH_OK;
      })
      .catch(error => {
        this.isSignedIn = false;
        this.user = {} as User;
        return error;
      })
  }

  async logout() {
    await this.auth.signOut();
  }

  public getUser(): User {
    return this.user;
  }
  
  public getIsSignedIn(): Observable<boolean> {
    return observableOf(this.isSignedIn);
  }

  public getIsAnonymous(): Observable<boolean> {
    return observableOf(this.isAnonymous);
  }
}
