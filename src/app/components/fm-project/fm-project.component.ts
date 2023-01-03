import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Auth, onAuthStateChanged } from '@angular/fire/auth';
import { AuthService } from 'src/app/services/auth.service';
import { Firestore, arrayUnion, arrayRemove, doc, getDoc, updateDoc } from '@angular/fire/firestore';
import { Subject, takeUntil } from 'rxjs';

import { FmSigninDialog } from '../fm-signin-dialog/fm-signin-dialog.component';
import { User } from '../../models/user';
import { ImageCard } from 'src/app/models/image-card';
import { environment } from 'src/environments/environment';

const IMAGE_CARD_DATA: ImageCard[] = [
  {
    title: 'Carl Jung at the Beach',
    subtitle: 'Stable Diffusion',
    image: 'cgjung-at-beach.jpeg',
    id: 'ee12ced5-bf10-49fc-93e8-b72478df9894',
    likes: 0,
    userLiked: false
  },
  {
    title: 'Richard Feynman at Starbucks',
    subtitle: 'Stable Diffusion',
    image: 'feynman-starbucks.jpeg',
    id: 'a548e061-1fe9-4e90-9373-90bd49c92fed',
    likes: 0,
    userLiked: false
  },
  {
    title: 'Einstein plays dice',
    subtitle: 'DALL-E 2',
    image: 'einstein-dice-de2.png',
    id: 'eda487e6-e2d6-4285-9b67-2102b50d39b8',
    likes: 0,
    userLiked: false
  },
  {
    title: 'Nikola Tesla with iPhone',
    subtitle: 'Stable Diffusion',
    image: 'nikola-tesla-iphone-2.png',
    id: 'ea521046-2e93-46fd-a706-db90fca35f6e',
    likes: 0,
    userLiked: false
  }
];
@Component({
  selector: 'app-fm-project',
  templateUrl: './fm-project.component.html',
  styleUrls: ['./fm-project.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FmProjectComponent implements OnInit, OnDestroy {
  isSignedIn?: boolean;
  isAnonymous?: boolean;
  private user: User = {} as User;
  private unsubscribe = new Subject<void>();
  imageCards = IMAGE_CARD_DATA;
  contentLoaded: boolean = false;

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
          if(this.isSignedIn) {
            this.user = this.authService.getUser();
            this.getLikes();
            this.contentLoaded = true;  
            this.change.markForCheck();  
          }
      });

      this.authService.getIsAnonymous()
        .pipe(takeUntil(this.unsubscribe))
        .subscribe(value => {
          this.isAnonymous = value;
          if (this.isAnonymous) {
            this.getLikes();
            this.contentLoaded = true;  
            this.change.markForCheck();  
          }
        })
    });
  }

  ngOnDestroy(): void {
    this.unsubscribe.next();
    this.unsubscribe.complete();  
  }

  onLike(id: string) {
    if (!this.isAnonymous) {
      this.setLikes(id);
    }
  }

  onNotSignedIn() {
    this.dialog.open(FmSigninDialog);
  }

  private async getLikes() {
    this.imageCards.forEach( async card => {
      const docRef = doc(this.firestore, 'likes/' + card.id);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const users = docSnap.data()['users'];
        card.likes = users.length;
        card.userLiked = users.includes(this.user.uid);
      } else {
        if (!environment.production) {
          console.error('Firebase document not found.');
        }
      }
      this.change.markForCheck();
    });
  }

  private async setLikes(id: string) {
    let update: ImageCard[] = this.imageCards.filter(card => card.id == id);
    if (update.length) {
      const docRef = doc(this.firestore, 'likes/' + id);    
      if (!update[0].userLiked) {
        update[0].likes++;
        update[0].userLiked = true;
        await updateDoc(docRef, {
          users: arrayUnion(this.user.uid)
        })
      } else {
        update[0].likes--;
        update[0].userLiked = false;
        await updateDoc(docRef, {
          users: arrayRemove(this.user.uid)
        });      
      }
      this.change.markForCheck();
    }
  }
}
