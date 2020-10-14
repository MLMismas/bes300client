import { createEffect, Actions, ofType } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import * as actions from '../actions/ordersasync.actions';
import { HttpClient } from '@angular/common/http';
import { map, switchMap, tap } from 'rxjs/operators';
import { Order } from '../models/order-create';
import { OrderEntity } from '../reducers/async.reducer';

@Injectable()
export class AsyncOrderEffects {

  refreshOrder$ = createEffect(
    () => this.actions$.pipe(
      ofType(actions.refreshOrder),
      switchMap(order => this.client.get<OrderEntity>(order.order.location)
        .pipe(
          map(r => actions.refreshOrderSuccess({ order: r }))
        )
      )
    )
  );


  saveOrder$ = createEffect(
    () => this.actions$.pipe(
      ofType(actions.addOrder),
      switchMap(order => this.client.post<Order>('http://localhost:3000/curbsideorders/async', order)
        .pipe(

          map(response => actions.addOrderSucceeded({
            payload: {
              ...response,
              location: 'http://localhost:3000/curbsideorders/' + response.id
            }
          }))
        )
      )
    ), { dispatch: true }

  );

  constructor(private actions$: Actions, private client: HttpClient) { }
}
