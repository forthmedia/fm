import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FmNavComponent } from './components/fm-nav/fm-nav.component';
import { FmHomeComponent } from './components/fm-home/fm-home.component';
import { FmFooterComponent } from './components/fm-footer/fm-footer.component';
import { FmProjectComponent } from './components/fm-project/fm-project.component';

@NgModule({
  declarations: [
    AppComponent,
    FmNavComponent,
    FmHomeComponent,
    FmFooterComponent,
    FmProjectComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
