import { createAction, props } from '@ngrx/store';
import { OrderEntity } from '../reducers/async.reducer';

export const addOrder = createAction(
  '[orders async] add order',
  props<{ for: string, items: string }>()
);

export const addOrderSucceeded = createAction(
  '[orders async] add order succeeded',
  props<{ payload: OrderEntity }>()
);

export const refreshOrder = createAction(
  '[orders async] refresh order',
  props<{ order: OrderEntity }>()
);

export const refreshOrderSuccess = createAction(
  '[orders async] refresh order success',
  props<{ order: OrderEntity }>()
);
