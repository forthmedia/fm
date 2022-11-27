import { Component, OnInit } from '@angular/core';

import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-fm-dashboard',
  templateUrl: './fm-dashboard.component.html',
  styleUrls: ['./fm-dashboard.component.scss']
})
export class FmDashboardComponent implements OnInit {
  displayName!: string;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.displayName = this.authService.getDisplayName();
  }
}
