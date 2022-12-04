import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService, FIREBASE_AUTH_OK } from 'src/app/services/auth.service';
@Component({
  selector: 'fm-login',
  templateUrl: './fm-login.component.html',
  styleUrls: ['./fm-login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FmLoginComponent implements OnInit {
  loginForm!: FormGroup;
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
    this.loginForm = this.formBuilder.group({
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email
      ]),
      password: this.formBuilder.control('', [
        Validators.required
      ])
    });
  }

  get email() { return this.loginForm.get('email'); }
  get password() { return this.loginForm.get('password'); }

  getEmailErrorMessage() {
    if (this.email?.hasError('required')) {
      return 'Enter your email';
    } else if (this.email?.hasError('email')) {
      return 'Not a valid email';
    }
    return;
  }

  getPasswordErrorMessage() {
    if (this.password?.hasError('required')) {
      return 'Enter your password';
    }
    return;
  }

  public onSubmit() {
    this.firebaseErrorMessage = '';

    if (this.loginForm.invalid)
      return;

    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
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
     })
  }
}
