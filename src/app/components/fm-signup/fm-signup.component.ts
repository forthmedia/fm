import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService, FIREBASE_AUTH_OK } from 'src/app/services/auth.service';
@Component({
  selector: 'fm-signup',
  templateUrl: './fm-signup.component.html',
  styleUrls: ['./fm-signup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FmSignupComponent implements OnInit {
  signupForm!: FormGroup;
  firebaseErrorMessage: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private formBuilder: FormBuilder,
    private change: ChangeDetectorRef
  ) {
    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      displayName: this.formBuilder.control('', [
        Validators.required,
      ]),
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email
      ]),
      password: this.formBuilder.control('', [
        Validators.required
      ]),
      passwordConfirmation: this.formBuilder.control('', [
        Validators.required
      ])
    });
  }

  get displayName() { return this.signupForm.get('displayName'); }
  get email() { return this.signupForm.get('email'); }
  get password() { return this.signupForm.get('password'); }
  get passwordConfirmation() { return this.signupForm.get('passwordConfirmation'); }

  getDisplayNameErrorMessage() {
    if (this.displayName?.hasError('required')) {
      return 'Enter your display name';
    }
    return;
  }

  getEmailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'Enter your email';
    } else if (this.email?.hasError('email')) {
      return 'Not a valid email';
    }
    return;
  }

  getPasswordErrorMessage() {
    if (this.password?.hasError('required') || this.passwordConfirmation?.hasError('required')) {
      return 'Enter your password';
    }
    return;
  }

  public onSubmit() {
    this.firebaseErrorMessage = '';

    if (this.signupForm.invalid)
      return;

    if (this.signupForm.value.password !== this.signupForm.value.passwordConfirmation) {
      this.firebaseErrorMessage = 'Passwords do not match';
      this.change.markForCheck();
      return;
    }

    this.authService.signup(this.signupForm.value.displayName, this.signupForm.value.email, this.signupForm.value.password)
      .then(response => { 
        if (response === FIREBASE_AUTH_OK) {
          this.router.navigate(['/dashboard']);
        } else {
          this.firebaseErrorMessage = response;
          this.change.markForCheck();
        }
      })
      .catch(error => {
        this.firebaseErrorMessage = error;
        this.change.markForCheck();
      });
  }
}
