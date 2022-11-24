import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router,
    private auth: Auth
  ) { }

  signup(user: any): Promise<any> {
    return createUserWithEmailAndPassword(this.auth, user.email, user.password)
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.error('Signup error ' + error);
      return { isValid: false, message: error.message };
    })
  }

  login(email: string, password: string): Promise<any> {
    return signInWithEmailAndPassword(this.auth, email, password)
      .then(() => {
        console.log('login: success');
      })
      .catch(error => {
        console.error('Login error ' + error);
      })
  }

  logout() {
    console.log('GOT LOGOUT CALL');
    this.auth.signOut();
  }
}
