import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-check-menu-item',
  templateUrl: './check-menu-item.component.html',
  styleUrls: ['./check-menu-item.component.scss'],
})
export class CheckMenuItemComponent implements OnInit {


  @Input()
  title: string;

  @Input()
  color: string;

  constructor() { 
    
  }

  ngOnInit() {

  }

  getColor() {
    console.log('check', this.color);
    return { 'color':  `${this.color}`}

  }

}
