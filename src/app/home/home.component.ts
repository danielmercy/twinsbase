import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms'
import { LoginDialog } from './../dialog/login/login.component';
import { SignUpDialog } from './../dialog/signup/signup.component';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material'
import { AngularFire, AuthProviders, AuthMethods, FirebaseListObservable } from 'angularfire2';
import "rxjs/add/operator/filter";
import "rxjs/add/operator/first";

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})
export class HomeComponent implements OnInit{
  loginRef: MdDialogRef<LoginDialog>;
  signupRef: MdDialogRef<SignUpDialog>;

  lastCloseResult: string;
  config: MdDialogConfig = {
    disableClose: true,
    width: '450px'
  };

  title = 'app works!';
  items: FirebaseListObservable<any>;
  name: any;
  user: any;
  isAuthenticated: boolean = false;
  slogan: string = "Experience Hospitality with Genuine Love and Differences.";

  constructor(public af: AngularFire, public router: Router, public dialog: MdDialog) {
    this.af.auth.subscribe( auth => {
      if(auth) {
        this.isAuthenticated = true;
        this.user = auth;
        console.log(this.user);
      } else {
        this.user = null;
        this.isAuthenticated = false;
      }
    });
  }


  SwipeConfig: Object = {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30
  };

  login() {
    this.loginRef = this.dialog.open(LoginDialog, this.config);

    this.loginRef.afterClosed().subscribe(result => {
      this.lastCloseResult = result;
      this.loginRef = null;
      console.log(this.lastCloseResult);
    });
  }

  signup() {
    this.signupRef = this.dialog.open(SignUpDialog, {
      disableClose: false,
      width: '600px',
      height: '100%'
    });

    this.signupRef.afterClosed().subscribe(result => {
      this.lastCloseResult = result;
      this.signupRef = null;
      console.log(this.lastCloseResult);
    });
  }

  ngOnInit() {
  }

  logout(){
    this.af.auth.logout().then(success => {
      this.isAuthenticated = false;
      console.log(success)
    }).catch(error => {
      console.warn(error);
    });
  }

  go(link) {
    this.router.navigateByUrl['\\' + link.toString()];
  }

  carousel = [
    {
      'img': 'img(1).jpg',
      'title': 'Conference room',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quas dicta'
    },{
      'img': 'img(2).jpg',
      'title': 'Conference room',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quas dicta'
    },{
      'img': 'img(3).jpg',
      'title': 'Conference room',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quas dicta'
    },{
      'img': 'img(4).jpg',
      'title': 'Conference room',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quas dicta'
    },{
      'img': 'img(5).jpg',
      'title': 'Conference room',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quas dicta'
    },{
      'img': 'img(6).jpg',
      'title': 'Conference room',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quas dicta'
    },{
      'img': 'img(7).jpg',
      'title': 'Conference room',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed quas dicta'
    }
  ]
}
