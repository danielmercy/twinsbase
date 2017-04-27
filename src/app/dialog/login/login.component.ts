import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { SignUpDialog } from '../signup/signup.component'
import { AngularFire, AuthMethods, AuthProviders } from 'angularfire2';
import { MdDialog, MdDialogConfig, MdDialogRef, MdInputModule } from '@angular/material';

@Component({
    selector: 'login-dialog',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.scss']
})

export class LoginDialog {
    signupRef: MdDialogRef<SignUpDialog>;
    dialog: MdDialog;

    
    isAuthenticated: boolean = false;
    constructor(private af: AngularFire, private router: Router, public dialogRef: MdDialogRef<LoginDialog>) {
        this.af.auth.subscribe( auth => {
            if(auth) {
                this.isAuthenticated = true;
                console.log(auth);
            } else {
                this.isAuthenticated = false;
            }
        });
    }

    onSubmit(formData) {
        if(formData.valid) {
            console.log(formData);
            this.af.auth.login({
                email: formData.value.email,
                password: formData.value.password
            },{
                provider: AuthProviders.Password,
                method: AuthMethods.Password
            }).then(success => {
                this.router.navigateByUrl['\reservations'];
            }).catch( error => {
                console.log(error);
            })
        }
    }

    loginFb() {
       this.af.auth.login({
         provider: AuthProviders.Facebook,
         method: AuthMethods.Popup
       }).then((success) => {
         console.log(success);
         this.isAuthenticated = true;
        //  this.router.navigate(['/reservations']);
       }).catch((err) => {
         console.log(err);
       });
     }

     loginGoogle() {
       this.af.auth.login({
         provider: AuthProviders.Google,
         method: AuthMethods.Popup
       }).then((success) => {
         this.router.navigate(['/reservations/dashboard']);
       }).catch((err) => {
           console.log(err);
       });
     }

    go(link) {
        this.router.navigateByUrl['\\' + link];
    }

    signup() {
        if(!this.dialogRef.close())
            this.dialogRef.close();
        this.signupRef = this.dialog.open(SignUpDialog, {
            disableClose: false,
            width: '450px'
        });

        this.signupRef.afterClosed().subscribe( result => {
            console.log("Result after sign up dialog has been closed $[result]")
        })
    }
}