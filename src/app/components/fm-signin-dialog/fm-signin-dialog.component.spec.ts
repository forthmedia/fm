import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmSigninDialog } from './fm-signin-dialog.component';

describe('FmSigninDialog', () => {
  let component: FmSigninDialog;
  let fixture: ComponentFixture<FmSigninDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FmSigninDialog ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmSigninDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
