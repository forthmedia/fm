import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'forthmedia';
  isSignedIn: boolean = false;
  constructor(
    private authService: AuthService,
    private router: Router,
    private auth: Auth
  ) {}

  ngOnInit(): void {
    onAuthStateChanged(this.auth, user => {
      if (user) {
        this.isSignedIn = true;
      } else {
        this.isSignedIn = false;
      }
    });
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home'])
  }
}
