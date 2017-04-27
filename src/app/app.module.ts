import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { MaterialModule } from '@angular/material';

import 'hammerjs';


import { AppComponent } from './app.component';
import { routing, appRoutingProviders } from './app.routing';
import { LoginDialog } from './dialog/login/login.component';
import { SignUpDialog } from './dialog/signup/signup.component';
import { ReservationsComponent } from './reservations/reservations.component';
import { ReservationsService } from './reservations/reservation.service';
import { HomeComponent } from './home/home.component';
import { BookingComponent } from './reservations/booking/booking.component';
import { DashboardComponent } from './reservations/dashboard/dashboard.component';
import { ReviewsComponent } from './reservations/reviews/reviews.component';
import { SettingsComponent } from './reservations/settings/settings.component';
import { DashboardAccountComponent } from './reservations/dashboard/account/account.component'
import { DashboardSettingsComponent } from './reservations/dashboard/settings/settings.component';
import { EmailLoginComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { Page404Component } from './page404/page404.component';
import { UpdateComponent } from './reservations/dashboard/account/update/update.component'

export const firebaseConfig = {
    apiKey: "AIzaSyDU2AwblXskvLwFIJxLGkgZWUdIg3Umlu0",
    authDomain: "twinsbase-d8bc9.firebaseapp.com",
    databaseURL: "https://twinsbase-d8bc9.firebaseio.com",
    projectId: "twinsbase-d8bc9",
    storageBucket: "twinsbase-d8bc9.appspot.com",
    messagingSenderId: "306771934960"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginDialog,
    SignUpDialog,
    ReservationsComponent,
    HomeComponent,
    BookingComponent,
    DashboardComponent,
    DashboardAccountComponent,
    DashboardSettingsComponent,
    ReviewsComponent,
    SettingsComponent,
    EmailLoginComponent,
    SignupComponent,
    Page404Component,
    UpdateComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpModule,
    routing,
    MaterialModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  entryComponents: [
    LoginDialog,
    SignUpDialog
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
