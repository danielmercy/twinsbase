import { Component, OnInit } from '@angular/core';
// import { FormBuilder } from '@angular/forms';
import { AngularFire } from 'angularfire2'
import { Router } from '@angular/router'

@Component({
  selector: 'dashboard-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class DashboardSettingsComponent implements OnInit {
  public PushNotify: boolean = false;
  public EmailNotify: boolean = false;
  public password: boolean = false;
  public isLoading: boolean = false;

  constructor(private af: AngularFire, private router: Router) { }

  ngOnInit() {
  }

  deleteAccount() {
    this.isLoading = !this.isLoading;
    this.af.auth.subscribe(auth => {
      if(auth) {
        auth.auth.delete().then(success => {
          console.log(`You've deleted ${auth.auth.email} from Twinsbase`);
          this.router.navigateByUrl('/');
        }).catch(error => {
          console.error(error);
        })
      }
    })
  }

}
