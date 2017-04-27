import { ModuleWithProviders, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

import { HomeComponent } from './home/home.component';
import { EmailLoginComponent } from './email/email.component'
import { Page404Component } from './page404/page404.component'
import { SignupComponent } from './signup/signup.component'
import { ReservationsComponent } from './reservations/reservations.component'
import { reservationsRoutes } from './reservations/reservations.routing'
import { DashboardComponent } from './reservations/dashboard/dashboard.component'
import { UpdateComponent } from './reservations/dashboard/account/update/update.component'
import { BookingComponent } from './reservations/booking/booking.component'
import { ReviewsComponent } from './reservations/reviews/reviews.component'
import { SettingsComponent } from './reservations/settings/settings.component'
import { AuthGuard } from './auth.service' 


export const appRoutes = [
    { path: '', component: HomeComponent },
    // { path: '**', redirectTo: '/404' },
    {
        path: '404',
        component: Page404Component
    },{ 
        path: 'reservations',
        component: ReservationsComponent,
        canActiviate: [ AuthGuard ],
        children: [
            {path: '', redirectTo: 'dashborad', pathMatch: 'full'},
            { path: 'dashboard', component: DashboardComponent },
            { path: 'bookings', component: BookingComponent },
            { path: 'reviews', component: ReviewsComponent },
            { path: 'settings', component: SettingsComponent }
        ]
    },{
        path: 'auth/email',
        component: EmailLoginComponent
    },{
        path: 'auth/signup',
        component: SignupComponent
    },{
        path: 'account/edit/:uid',
        component: UpdateComponent
    }

];

export const appRoutingProviders: any[] = [
    AuthGuard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});