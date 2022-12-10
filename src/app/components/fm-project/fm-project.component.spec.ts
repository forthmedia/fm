import { ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { ChangeDetectorRef } from '@angular/core';

import { FmProjectComponent } from './fm-project.component';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from '../../../environments/environment';

describe('FmProjectComponent', () => {
  let component: FmProjectComponent;
  let fixture: ComponentFixture<FmProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth()),        
      ],
      providers: [
        AuthService
      ],      
      declarations: [
        FmProjectComponent,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmProjectComponent);
    component = fixture.componentInstance;
    component.isSignedIn = true;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Like button', fakeAsync(() => {
    spyOn(component, 'onLike');
    let button = fixture.debugElement.nativeElement.querySelector('.likes-container');
    button.click();
    tick();
    expect(component.onLike).toHaveBeenCalled();
  }));

  it('should implement Change Detection', () => {
    const mockChangeDetectorRef = fixture.debugElement.injector.get(ChangeDetectorRef);
    const spy = spyOn(mockChangeDetectorRef.constructor.prototype, 'markForCheck');
    mockChangeDetectorRef.markForCheck();
    expect(spy).toHaveBeenCalled();
  });
});
