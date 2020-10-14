import { EntityState, createEntityAdapter } from '@ngrx/entity';
import { createReducer, Action, on } from '@ngrx/store';
import * as actions from '../actions/ordersasync.actions';
export interface OrderEntity {
  id: string;
  for: string;
  items: string;
  status: string;
  location: string;
}

export interface AsyncOrderState extends EntityState<OrderEntity> {

}

export const adapter = createEntityAdapter<OrderEntity>();

const initialState = adapter.getInitialState();

const reducerFunction = createReducer(
  initialState,
  on(actions.addOrderSucceeded, (s, a) => adapter.addOne(a.payload, s)),
  on(actions.refreshOrderSuccess, (s, a) => adapter.upsertOne(a.order, s))
);

export function reducer(state: AsyncOrderState = initialState, action: Action): AsyncOrderState {
  return reducerFunction(state, action);
}



