import { createFeatureSelector, createSelector } from '@ngrx/store';
import { OrderState } from './Order.reducers';

export const selectOrderState = createFeatureSelector<OrderState>('orders');

export const selectOrders = createSelector(
  selectOrderState,
  (state) => state.orders
);

//loading

export const selectLoading = createSelector(
  selectOrderState,
  (state) => state.loading
);

//for errors
export const selectError = createSelector(
  selectOrderState,
  (state) => state.error
);

export const selectOrderById = (id: string) => 
  createSelector(selectOrders, (orders) => 
    orders.find((order) => order.id === id)
);