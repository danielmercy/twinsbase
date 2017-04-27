import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { LoginService } from './login.service';
import { AuthProviders } from 'angularfire2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss'],
  providers: [LoginService]
})
export class EmailLoginComponent implements OnInit {
  @ViewChild('email')
  private email: ElementRef;
  @ViewChild('password')
  private password: ElementRef;

  constructor(public router: Router, private ls: LoginService) { 
    
  }

  ngOnInit() {
  }

  signup() {
    this.router.navigateByUrl('auth/signup');
  }

  signIn() {
    console.log(this.email, this.password);
    this.ls.logIn({
      email: this.email.nativeElement.value,
      password: this.password.nativeElement.value
    }).then(success => {
      console.log(success);
      this.router.navigateByUrl('reservations/dashboard');
    }).catch(error => {
      console.log(`Email ${error}`);
    });
  }

  loginFb() {
    this.ls.signIn(AuthProviders.Facebook).then(success => {
      console.log(success);
      this.router.navigateByUrl('reservations/dashboard');
    }).catch(error => {
      console.log(`Facebook ${error}`);
    });
  }

  loginGoogle() {
    this.ls.signIn(AuthProviders.Google).then(success => {
      console.log(success);
      this.router.navigateByUrl('reservations/dashboard');
    }).catch(error => {
      console.log(`Google ${error}`);
    });
  }

}
