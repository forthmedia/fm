import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FmHomeComponent} from './components/fm-home/fm-home.component';
import { FmProjectComponent } from './components/fm-project/fm-project.component';
import { FmDashboardComponent } from './components/fm-dashboard/fm-dashboard.component';
import { FmLoginComponent } from './components/fm-login/fm-login.component';
import { FmSignupComponent } from './components/fm-signup/fm-signup.component';
import { FmInfoComponent } from './components/fm-info/fm-info.component';

import { AuthGuard } from './services/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: 'home', component: FmHomeComponent },
  { path: 'project', component: FmProjectComponent },
  { path: 'dashboard', component: FmDashboardComponent, canActivate: [AuthGuard] },
  { path: 'login', component: FmLoginComponent },
  { path: 'signup', component: FmSignupComponent },
  { path: 'info', component: FmInfoComponent },
  { path: '**', component: FmHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
