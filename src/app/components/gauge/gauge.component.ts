import { Component, Input, OnInit } from '@angular/core';
import { IonMenuToggle } from '@ionic/angular';

@Component({
  selector: 'app-gauge',
  templateUrl: './gauge.component.html',
  styleUrls: ['./gauge.component.scss'],
})
export class GaugeComponent implements OnInit {

  @Input()
  size: string;

  @Input()
  title: string;

  @Input()
  value: string;

  @Input()
  unit: string;

  @Input()
  color: string;

  constructor() { }

  ngOnInit() {}

  getBackground() {
    console.log(this.color);
    return { 'border': `dotted ${this.color} 2px`,
    'position': 'absolute',
    'width': '150px',
    'height': '150px',
    'border-radius': '75px',
    'box-shadow': '0px 0px 8px #13162a' };
  }

  getPieBackground() {
    return { 
      'background-color': `${this.color}`
    };
  }

  

}
