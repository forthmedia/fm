import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Firestore, arrayUnion, arrayRemove, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { Subject, takeUntil } from 'rxjs';

import {FmSigninDialog} from '../fm-signin-dialog/fm-signin-dialog.component';
import { User } from '../../models/user';

@Component({
  selector: 'app-fm-project',
  templateUrl: './fm-project.component.html',
  styleUrls: ['./fm-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FmProjectComponent implements OnInit, OnDestroy {
  isSignedIn?: boolean;
  item1: string = 'ee12ced5-bf10-49fc-93e8-b72478df9894'; //Carl Jung at the Beach
  item2: string = 'a548e061-1fe9-4e90-9373-90bd49c92fed'; //Richard Feynman at Starbucks
  likes: number = 0;
  userLiked: boolean = false;
  private user: User = {} as User;
  private unsubscribe = new Subject<void>();

  constructor(
    private authService: AuthService,
    private auth: Auth,
    private firestore: Firestore,
    private change: ChangeDetectorRef,
    public dialog: MatDialog
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

    this.user = this.authService.getUser();
    this.getLikes();
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();  
  }

  onLike(id: string) {
    this.userLiked = !this.userLiked;
    if (this.userLiked) {
      this.likes++;
    } else {
      this.likes--;
    }

    this.setLikes(id);
  }

  onNotSignedIn() {
    this.dialog.open(FmSigninDialog);
  }

  private async getLikes() {
    const docRef = doc(this.firestore, 'likes/' + this.item2);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const users = docSnap.data()['users'];
      this.likes = users.length;
      this.userLiked = users.includes(this.user.uid);
    } else {
      console.error('Firebase document not found.')
    }

    this.change.markForCheck();
  }

  private async setLikes(id: string) {
    const docRef = doc(this.firestore, 'likes/' + id);    
    if (this.userLiked) {
      await updateDoc(docRef, {
        users: arrayUnion(this.user.uid)
      })
    } else {
      await updateDoc(docRef, {
        users: arrayRemove(this.user.uid)
      });      
    }

    this.change.markForCheck();
  }
}
