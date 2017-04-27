import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn, moveInUp } from '../../route.animations'

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss'],
  animations: [moveIn(), fallIn(), moveInUp()],
  host: {'[@moveInUp]': ''}
})
export class ReviewsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
