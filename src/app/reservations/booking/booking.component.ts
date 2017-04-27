import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn, fallInDown, moveInUp } from '../../route.animations'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
  animations: [moveIn(), fallIn(), fallInDown(), moveInUp()],
  host: {'[@moveInUp]': ''}
})
export class BookingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
