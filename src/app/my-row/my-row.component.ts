import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-my-row',
  templateUrl: './my-row.component.html',
  styleUrls: ['./my-row.component.css']
})
export class MyRowComponent implements OnInit {
  @Input()data = '';
  constructor() { }

  ngOnInit() {
  }

}
