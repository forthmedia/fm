import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'forthmedia';
  uid: string = '';

  constructor(
    public auth: Auth,
    private authService: AuthService,
    private router: Router,
  ) {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.uid = user.uid!;
      } else {
        this.uid = '';
      }
    })
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home'])
  }
}
