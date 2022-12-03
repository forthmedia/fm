import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Subject, takeUntil } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'forthmedia';
  $isSignedIn!: boolean;
  private unsubscribe = new Subject<void>();

  constructor(
    private authService: AuthService,
    private router: Router,
    private auth: Auth
  ) {}

  ngOnInit(): void {
    onAuthStateChanged(this.auth, () => {
      this.authService.getIsSignedIn()
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(value => {
          this.$isSignedIn = value;
      });      
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();  
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/home'])
  }
}
