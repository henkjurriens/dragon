import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-item',
  templateUrl: './dashboard-item.component.html',
  styleUrls: ['./dashboard-item.component.scss'],
})
export class DashboardItemComponent implements OnInit {

  @Input()
  image: string;

  @Input()
  title: string;

  constructor() { }

  ngOnInit() {
    this.image = `/assets/${this.image}`;
    console.log(this.image);
  }

}
