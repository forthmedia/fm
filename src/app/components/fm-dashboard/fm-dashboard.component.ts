import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
import { User } from '../../models/user';
@Component({
  selector: 'app-fm-dashboard',
  templateUrl: './fm-dashboard.component.html',
  styleUrls: ['./fm-dashboard.component.scss']
})
export class FmDashboardComponent implements OnInit {
  user: User = {} as User;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }
}
