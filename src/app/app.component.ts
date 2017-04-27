import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginDialog } from './dialog/login/login.component';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material'
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import "rxjs/add/operator/filter";
import "rxjs/add/operator/first";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
}
