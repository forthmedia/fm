import { TestBed } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { environment } from '../../environments/environment';

describe('AuthService', () => {
  let service: AuthService;
  let mockAuthGuard: AuthGuard;

  beforeEach(async () => {
    mockAuthGuard = jasmine.createSpyObj('AuthGuard', ['canActivate']);

    await TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth()),        
      ],
      providers: [
        {provide: AuthGuard, useValue: mockAuthGuard}
      ]
    });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should have AuthGuard', () => {
    expect(mockAuthGuard.canActivate).toBeDefined();
  })
 
  it('should have signup function', () => {
    expect(service.signup).toBeDefined();
  });

  it('should have login function', () => {
    expect(service.login).toBeDefined();
  });

  it('should have logout function', () => {
    expect(service.logout).toBeDefined();
  });

  it('should have getUser function', () => {
    expect(service['user']).toBeDefined();
    expect(service.getUser).toBeDefined();
  });

  it('should have getIsSignedIn function', () => {
    expect(service['isSignedIn']).toBeDefined();
    expect(service.getIsSignedIn).toBeDefined();
  })

  it('should have getIsAnonymous function', () => {
    expect(service['isAnonymous']).toBeDefined();
    expect(service.getIsAnonymous).toBeDefined();
  })
});
