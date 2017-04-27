import { Component, ViewChild, ElementRef, OnInit, Output } from '@angular/core';
import { AngularFire } from 'angularfire2'
import { Router, ActivatedRoute } from '@angular/router'


@Component({
  selector: 'dashboard-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  // animations: [moveIn(), fallIn(), fallInDown(), moveInUp()]
  // host: {'[@moveInUp]': ''}
})
export class DashboardAccountComponent implements OnInit {
  state: string = '';

  @ViewChild("iName")
  private inputEl: ElementRef;
  public name: any= 'Daniel Mercy';
  public profile: Object;
  isAuthenticated: boolean = false;

  private isEditable: boolean = false;

  constructor(private af: AngularFire,public router: Router) {
    this.af.auth.subscribe(a => {
      if(a) {
        this.profile = a.auth;
        this.name = a.auth.displayName;
        this.isAuthenticated = true;
      }
    })
   }

  ngOnInit() {
  }

  edit() {
    this.isEditable = !this.isEditable;
  }

  editAcc(uid) {
    console.log(uid);
    this.router.navigateByUrl(`account/edit/${uid}`);
  }

  save() {
    this.name = this.inputEl.nativeElement.value;
    this.isEditable = !this.isEditable;
  }

  checkState() {
    return this.isEditable == true ? 'none' : 'inline';
  }
}
