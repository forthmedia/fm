import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from 'src/app/services/auth.service';
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

  public onSubmit() {
    if (this.loginForm.invalid)
      return;

    this.authService.login(this.loginForm.value.email, this.loginForm.value.password)
      .then(value => {
        if (value === true) {
          this.router.navigate(['/dashboard']);
        }
     })
      .catch(error => {
        this.firebaseErrorMessage = error;
      })
  }
}
