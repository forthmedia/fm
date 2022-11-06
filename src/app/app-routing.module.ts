import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FmHomeComponent} from './components/fm-home/fm-home.component';
import { FmProjectComponent } from './components/fm-project/fm-project.component';

const routes: Routes = [
  { path: 'project', component: FmProjectComponent },
  { path: '', component: FmHomeComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
