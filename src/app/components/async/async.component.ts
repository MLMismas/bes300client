import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { OrderCreate } from 'src/app/models/order-create';
import { AppState, selectAllOrderListAsync } from 'src/app/reducers';
import { OrderEntity } from 'src/app/reducers/async.reducer';
import * as actions from '../../actions/ordersasync.actions';
@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent implements OnInit {
  orders$: Observable<OrderEntity[]>;
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.orders$ = this.store.pipe(
      select(selectAllOrderListAsync)
    );
  }

  onOrderPlaced(order: OrderCreate): void {
    this.store.dispatch(actions.addOrder(order));
  }
}
