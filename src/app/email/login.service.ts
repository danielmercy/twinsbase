import { Injectable, Inject } from '@angular/core'
import { AuthProviders, AngularFireAuth, FirebaseAuthState, AuthMethods, FirebaseApp } from 'angularfire2'
import { User } from 'firebase'

@Injectable()
export class LoginService {
  private authState: FirebaseAuthState;

  constructor(public auth$: AngularFireAuth, @Inject(FirebaseApp) app) {
    auth$.subscribe((state: FirebaseAuthState) => { this.authState = state});
    app.auth().getRedirectResult().catch(error => console.log(error));
  }

  get authenticated(): boolean {
    return this.authState !== null && this.authState !== undefined;
  }

  get user(): User {
    return this.authState.auth;
  }

  logIn(data: any) {
    return this.auth$.login(data, { provider: AuthProviders.Password, method: AuthMethods.Password });
  }

  signIn(provider: AuthProviders) {
    return this.auth$.login({ provider, method: AuthMethods.Popup });
  }

  signOut() {
      return this.auth$.logout();
  }
}