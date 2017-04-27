import { Component, ViewChild, ElementRef, OnInit, Input } from '@angular/core';
import { AngularFire } from 'angularfire2'
import { Router } from '@angular/router'
import {  ReservationsService } from './reservation.service'

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.component.html',
  styleUrls: ['./reservations.component.scss'],
  providers: [ReservationsService]
})
export class ReservationsComponent implements OnInit {
   @Input() name:string;
   private navMode;
   public user: Object;
   isAuthenticated: boolean = false;

  constructor(public router: Router,public af: AngularFire) { 
    this.af.auth.subscribe(e => {
      if(e) {
        this.isAuthenticated = true;
        this.user = e.auth;
      }
    });
  }

  public get value() : string {
    return 
  }

  ngOnInit() {
    this.navMode = this.isLargeScreen ? 'side' : 'push';
  }

  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/');
    this.user = null;
  }

  isLargeScreen() {
    const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    if (width > 900) {
        return true;
    } else {
        return false;
    }
  }

}
