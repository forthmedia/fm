import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {FmHomeComponent} from './components/fm-home/fm-home.component';
import { FmProjectComponent } from './components/fm-project/fm-project.component';

const routes: Routes = [
  { path: '', component: FmHomeComponent },
  { path: 'project', component: FmProjectComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
