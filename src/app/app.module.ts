import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FmNavComponent } from './components/fm-nav/fm-nav.component';
import { FmHomeComponent } from './components/fm-home/fm-home.component';
import { FmFooterComponent } from './components/fm-footer/fm-footer.component';
import { FmProjectComponent } from './components/fm-project/fm-project.component';
import { FmSignupComponent } from './components/fm-signup/fm-signup.component';
import { FmLoginComponent } from './components/fm-login/fm-login.component';
import { FmDashboardComponent } from './components/fm-dashboard/fm-dashboard.component';

import { environment } from '../environments/environment';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

@NgModule({
  declarations: [
    AppComponent,
    FmNavComponent,
    FmHomeComponent,
    FmFooterComponent,
    FmProjectComponent,
    FmSignupComponent,
    FmLoginComponent,
    FmDashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
