import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmSignupComponent } from './fm-signup.component';

describe('FmSignupComponent', () => {
  let component: FmSignupComponent;
  let fixture: ComponentFixture<FmSignupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmSignupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
