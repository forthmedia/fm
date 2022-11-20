import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmLoginComponent } from './fm-login.component';

describe('FmLoginComponent', () => {
  let component: FmLoginComponent;
  let fixture: ComponentFixture<FmLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmLoginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
