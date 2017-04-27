import { Injectable } from '@angular/core';

@Injectable()

export class  ReservationsService {
    dashboard: Dashboard[];
    isEditable: boolean;
}

interface Dashboard {
    name: String,
    email: String,
    phone_no: String
}
