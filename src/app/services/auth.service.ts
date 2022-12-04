import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, UserCredential, updateProfile } from '@angular/fire/auth';
import { Observable, of as observableOf } from 'rxjs';

export const FIREBASE_AUTH_OK: string = '';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isSignedIn: boolean = false;
  private displayName: string = '';

  constructor(
    private auth: Auth
  ) {
    onAuthStateChanged(auth, user => {
      if (user) {
        this.isSignedIn = true;
        this.displayName = user.displayName!;
      } else {
        this.isSignedIn = false;
        this.displayName = '';
      }
    });
  }

  signup(displayName: string, email: string, password: string): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, email, password)
    .then((userCredential: UserCredential) => {
      updateProfile(userCredential.user, {displayName});
    })
    .then(() => {
      this.displayName = displayName;
      this.isSignedIn = true;
      return FIREBASE_AUTH_OK;
    })
    .catch(error => {
      this.isSignedIn = false;
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
        return error;
      })
  }

  logout() {
    this.auth.signOut();
  }

  public getDisplayName(): string {
    return this.displayName;
  }

  public getIsSignedIn(): Observable<boolean> {
    return observableOf(this.isSignedIn);
  }
}
