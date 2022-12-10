import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-fm-project',
  templateUrl: './fm-project.component.html',
  styleUrls: ['./fm-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FmProjectComponent implements OnInit, OnDestroy {
  isSignedIn?: boolean;
  likes: number = 1;
  private unsubscribe = new Subject<void>();

  constructor(
    private authService: AuthService,
    private auth: Auth,
    private change: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    onAuthStateChanged(this.auth, () => {
      this.authService.getIsSignedIn()
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(value => {
          this.isSignedIn = value;
          this.change.markForCheck();
      });      
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();  
  }

  onLike() {
    this.likes++;
    this.change.markForCheck();
  }
}
