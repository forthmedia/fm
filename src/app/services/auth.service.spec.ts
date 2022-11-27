import { TestBed } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { AuthService } from './auth.service';
import { environment } from '../../environments/environment';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth()),        
      ],
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have signup function', () => {
    expect(service.signup).toBeDefined();
  });

  it('should have login function', () => {
    expect(service.login).toBeDefined();
  });

  it('should have logout function', () => {
    expect(service.logout).toBeDefined();
  });

  it('should have getDisplayName function', () => {
    expect(service.displayName).toBeDefined();
    expect(service.getDisplayName).toBeDefined();
  });
});
