import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { of } from 'rxjs';

import { FmInfoComponent } from './fm-info.component';

describe('FmInfoComponent', () => {
  let component: FmInfoComponent;
  let fixture: ComponentFixture<FmInfoComponent>;

  const mockActivatedRoute = {
    snapshot: {
      queryParamMap: convertToParamMap({
        doc: ''
      })
    }
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmInfoComponent ],
      providers: [
        { provide: ActivatedRoute, useValue: mockActivatedRoute }
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have Privacy and Cookies', () => {
    component.doc = 'privacy';
    expect(component.privacy).toBeDefined();
    expect(component.doc).toEqual('privacy');
  });

  it('should have Terms and Conditions', () => {
    component.doc = 'terms';
    expect(component.terms).toBeDefined();
    expect(component.doc).toEqual('terms');
  });
});
