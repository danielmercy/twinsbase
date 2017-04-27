import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  public id: string;
  

  constructor(private router: Router, private route: ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['uid'];

  }

}
