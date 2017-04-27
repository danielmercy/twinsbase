import { ModuleWithProviders, Injectable } from '@angular/core';
import { Routes, RouterModule, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'

import { DashboardComponent } from './dashboard/dashboard.component'
import { BookingComponent } from './booking/booking.component'
// import { AuthGuard } from './auth.service' 
// , canActiviate: [ AuthGuard ]

export const reservationsRoutes = [
    {path: '', redirectTo: 'dashborad', pathMatch: 'full'},
    { path: 'dashborad', component: DashboardComponent },
    { path: 'booking', component: BookingComponent }

];

// export const appRoutingProviders: any[] = [
//     AuthGuard
// ];