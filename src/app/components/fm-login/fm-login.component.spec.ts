import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { FmLoginComponent } from './fm-login.component';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from '../../../environments/environment';

describe('FmLoginComponent', () => {
  let component: FmLoginComponent;
  let fixture: ComponentFixture<FmLoginComponent>;

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
        FmLoginComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize Form during ngOnInit', () => {
    expect(component.ngOnInit).toBeDefined();
    expect(component.loginForm).toBeDefined()
  });

  it('should have onSubmit function', () => {
    expect(component.onSubmit).toBeDefined();
  });
});
