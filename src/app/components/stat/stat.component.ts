import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss'],
})
export class StatComponent implements OnInit {

  @Input()
  title: string;

  @Input()
  value: string;

  @Input()
  unit: string;

  @Input()
  perc: string;


  constructor() { }

  ngOnInit() {}

  getStylePerc() {
    return { 'width': `${this.perc}px`, 'height': '6px', 'border-color': '#298BFE', 'background-color': '#298BFE'};
  }

  getStylePercRest() {
    return { 'width': `${100 - +this.perc}px`, 'height': '6px', 'border-color': '#2e304d', 'background-color': '#2e304d'};
  }      
  

}
