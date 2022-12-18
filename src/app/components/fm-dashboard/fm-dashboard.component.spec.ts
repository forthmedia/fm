import { ComponentFixture, TestBed } from '@angular/core/testing';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

import { FmDashboardComponent } from './fm-dashboard.component';
import { environment } from '../../../environments/environment';

describe('FmDashboardComponent', () => {
  let component: FmDashboardComponent;
  let fixture: ComponentFixture<FmDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
        provideAuth(() => getAuth()),        
      ],
      declarations: [
        FmDashboardComponent
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have user displayName', () => {
    component.user.displayName = 'Foo';
    expect(component.user.displayName).toBe('Foo');
  })
});
