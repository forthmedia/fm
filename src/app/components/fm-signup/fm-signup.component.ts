import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
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
  ) {
    this.firebaseErrorMessage = '';
  }

  ngOnInit(): void {
    this.signupForm = this.formBuilder.group({
      displayName: this.formBuilder.control('', [
        Validators.required,
        Validators.minLength(3)
      ]),
      email: this.formBuilder.control('', [
        Validators.required,
        Validators.email
      ]),
      password: this.formBuilder.control('', [
        Validators.required
      ])
    });
  }

  public onSubmit() {
    if (this.signupForm.invalid)
      return;

    this.authService.signup(this.signupForm.value.displayName, this.signupForm.value.email, this.signupForm.value.password)
      .then(value => {
        if (value === true) {
          this.router.navigate(['/dashboard']);
        }
     })
      .catch(error => {
        this.firebaseErrorMessage = error;
      });
  }
}
