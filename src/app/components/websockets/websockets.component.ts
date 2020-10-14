import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderCreate } from 'src/app/models/order-create';
import { OrderEntity } from 'src/app/reducers/async.reducer';
import { CurbsideHubService } from 'src/app/services/curbside.hub.service';

@Component({
  selector: 'app-websockets',
  templateUrl: './websockets.component.html',
  styleUrls: ['./websockets.component.scss']
})
export class WebsocketsComponent implements OnInit {

  order$: Observable<OrderEntity>;

  constructor(private hub: CurbsideHubService) { }

  ngOnInit(): void {
    this.order$ = this.hub.getOrder();
  }

  placeOrder(order: OrderCreate): void {
    this.hub.sendOrder(order);
  }
}