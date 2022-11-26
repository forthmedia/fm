import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isSignedIn: boolean = false;

  constructor(
    private router: Router,
    private auth: Auth
  ) { }

  signup(user: any): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password)
    .then(userCredential => {
      console.log('register success: ' + userCredential);
      this.isSignedIn = true;
      return this.isSignedIn;
    })
    .catch(error => {
      console.error('Signup error ' + error);
      this.isSignedIn = false;
      return this.isSignedIn;
    })
  }

  login(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(userCredential => {
        console.log('login: success');
        this.isSignedIn = true;
        return this.isSignedIn;
      })
      .catch(error => {
        console.error('Login error ' + error);
        this.isSignedIn = false;
        return this.isSignedIn;
      })
  }

  logout() {
    console.log('GOT LOGOUT CALL');
    this.auth.signOut();
  }
}
