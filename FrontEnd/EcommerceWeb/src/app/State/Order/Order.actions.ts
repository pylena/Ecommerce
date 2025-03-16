import { createAction, props } from '@ngrx/store';
import { OrderList } from './Order.reducers';

export const loadOrders = createAction('[Order Page] Load Orders');
export const loadOrdersSuccess = createAction(
  '[Order] Load Orders Success',
  props<{ orders: OrderList[] }>()
);
export const loadOrdersFailure = createAction(
  '[Order Page] Load Orders Failure',
  props<{ error: string }>()
);

// Add new Order action
export const addOrder = createAction(
  '[Order Page] Add Order',
  props<{ order: OrderList }>()
);
export const addOrderSuccess = createAction(
  '[Order Page] Add Order Success',
  props<{ order: OrderList }>()
);
export const addOrderFailure = createAction(
  '[Order Page] Add Order Failure',
  props<{ error: string }>()
);

// remove Order action
export const deleteOrder = createAction(
  '[Order Page] Delete Order',
  props<{ id: string }>()
);