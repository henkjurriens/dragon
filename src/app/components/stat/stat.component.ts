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


  constructor() { }

  ngOnInit() {}

}
