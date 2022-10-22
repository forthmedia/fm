import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmNavComponent } from './fm-nav.component';

describe('FmNavComponent', () => {
  let component: FmNavComponent;
  let fixture: ComponentFixture<FmNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmNavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
