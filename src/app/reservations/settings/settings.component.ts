import { Component, OnInit } from '@angular/core';
import { moveIn, fallIn, moveInUp } from '../../route.animations'

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss'],
  animations: [moveIn(), fallIn(), moveInUp()],
  host: {'[@moveInUp]': ''}
})
export class SettingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
