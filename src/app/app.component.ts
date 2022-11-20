import { Component } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forthmedia';
  uid: string = '';

  constructor(public auth: Auth) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid!;
      } else {
        this.uid = '';
      }
    })
  }

  logout(): void {
    this.auth.signOut();
  }
}
