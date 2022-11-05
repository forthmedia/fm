import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmProjectComponent } from './fm-project.component';

describe('FmProjectComponent', () => {
  let component: FmProjectComponent;
  let fixture: ComponentFixture<FmProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmProjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
