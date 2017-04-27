import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { MdDialog, MdDialogConfig, MdDialogRef, MdInputModule } from '@angular/material';

@Component({
    selector: 'signup-dialog',
    templateUrl: 'signup.component.html',
    styleUrls: ['signup.component.scss']
})

export class SignUpDialog {
    
    isAuthenticated: boolean = false;
    constructor(private af: AngularFire, private router: Router, public dialogRef: MdDialogRef<SignUpDialog>) {
        this.af.auth.subscribe( auth => {
            if(auth) {
                this.isAuthenticated = true;
                console.log(auth);
            }
        });
    }
}