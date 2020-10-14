import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { refreshOrder } from 'src/app/actions/ordersasync.actions';
import { AppState } from 'src/app/reducers';
import { OrderEntity } from 'src/app/reducers/async.reducer';

@Component({
  selector: 'app-async-list',
  templateUrl: './async-list.component.html',
  styleUrls: ['./async-list.component.scss']
})
export class AsyncListComponent implements OnInit {

  @Input() orders: OrderEntity[];
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
  }

  refresh(order: OrderEntity): void {
    this.store.dispatch(refreshOrder({ order }));
  }
}
