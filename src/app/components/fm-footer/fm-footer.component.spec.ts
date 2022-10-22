import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmFooterComponent } from './fm-footer.component';

describe('FmFooterComponent', () => {
  let component: FmFooterComponent;
  let fixture: ComponentFixture<FmFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
