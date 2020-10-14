import { Component, Input, OnInit } from '@angular/core';
import { OrderEntity } from 'src/app/reducers/async.reducer';

@Component({
  selector: 'app-order-display',
  templateUrl: './order-display.component.html',
  styleUrls: ['./order-display.component.scss']
})
export class OrderDisplayComponent implements OnInit {

  @Input() order: OrderEntity = null;
  constructor() { }

  ngOnInit(): void {
  }

}