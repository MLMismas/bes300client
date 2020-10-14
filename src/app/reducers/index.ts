import * as fromAsync from './async.reducer';
export interface AppState {
  ordersAsync: fromAsync.AsyncOrderState;
}

export const reducers = {
  ordersAsync: fromAsync.reducer
};

const selectOrdersAsync = (state: AppState) => state.ordersAsync;

const { selectAll: selectAllOrdersAsync } = fromAsync.adapter.getSelectors(selectOrdersAsync);

export const selectAllOrderListAsync = selectAllOrdersAsync;
