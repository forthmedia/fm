import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmHomeComponent } from './fm-home.component';

describe('FmHomeComponent', () => {
  let component: FmHomeComponent;
  let fixture: ComponentFixture<FmHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
