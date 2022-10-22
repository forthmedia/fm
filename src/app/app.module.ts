import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FmNavComponent } from './components/fm-nav/fm-nav.component';
import { FmHomeComponent } from './components/fm-home/fm-home.component';
import { FmFooterComponent } from './components/fm-footer/fm-footer.component';

@NgModule({
  declarations: [
    AppComponent,
    FmNavComponent,
    FmHomeComponent,
    FmFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
