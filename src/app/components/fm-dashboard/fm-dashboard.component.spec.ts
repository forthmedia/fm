import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmDashboardComponent } from './fm-dashboard.component';

describe('FmDashboardComponent', () => {
  let component: FmDashboardComponent;
  let fixture: ComponentFixture<FmDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
