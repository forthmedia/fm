import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { FmSignupComponent } from './fm-signup.component';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from '../../../environments/environment';

describe('FmSignupComponent', () => {
  let component: FmSignupComponent;
  let fixture: ComponentFixture<FmSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth()),        
      ],
      providers: [
        FormBuilder,
        AuthService
      ],
      declarations: [
        FmSignupComponent,
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize Form during ngOnInit', () => {
    expect(component.ngOnInit).toBeDefined();
    expect(component.signupForm).toBeDefined()
  });

  it('should have onSubmit function', () => {
    expect(component.onSubmit).toBeDefined();
  });
});
