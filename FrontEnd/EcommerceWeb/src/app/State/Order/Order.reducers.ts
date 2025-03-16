import { createReducer, on } from "@ngrx/store";
import * as OrderActions from './Order.actions';

export interface Order {
    id: string; //guid in the backend
    productId: string;  //guid in the backend
    quantity: number; 
    TotalPrice: number;
    orderId: string; // guid in the backend
  }
  
  export interface OrderList {
    id: string;
    orderItems: Order[]; }

  export interface OrderState {
    orders: OrderList[];
    loading: boolean;
    error: string | null;
  }
  
  export const initialState: OrderState = {
    orders: [],
    loading: false,
    error: null,
  };

  export const orderReducer = createReducer(
    initialState,
    on(OrderActions.loadOrders, (state) => ({
      ...state,
      loading: true,
      error: null,
    })),
    on(OrderActions.loadOrdersSuccess, (state, { orders }) => ({
      ...state,
      orders,
      loading: false,
    })),
    on(OrderActions.loadOrdersFailure, (state, { error }) => ({
      ...state,
      error,
      loading: false,
    })),
    on(OrderActions.addOrder, (state, { order }) => ({
      ...state,
      orders: [...state.orders, order],
    })),
    on(OrderActions.deleteOrder, (state, { id }) => ({
      ...state,
      orders: state.orders.filter((o) => o.id !== id),
    }))
);
