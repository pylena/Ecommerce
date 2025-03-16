import { Injectable } from '@angular/core';
import * as OrderActions from './Order.actions';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { OrderApiService } from '../../order-api.service';

@Injectable()
export class OrderEffects {
  loadOrders$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.loadOrders),
      mergeMap(() =>
        this.orderApiService.getOrders().pipe(
          map((orders) => OrderActions.loadOrdersSuccess({ orders })),
          catchError((error) => of(OrderActions.loadOrdersFailure({ error: error.message })))
        )
      )
    ));

  addOrder$ = createEffect(() =>
    this.actions$.pipe(
      ofType(OrderActions.addOrder),
      mergeMap((action) => {
        console.log(' add Order effect with data:', action.order); // for testing
        return this.orderApiService.addOrder(action.order).pipe(
          map((order) => {
            console.log('Order created successfully:', order); //for testing
            return OrderActions.addOrderSuccess({ order });
          }),
          catchError((error) => {
            console.error('an Error creating order:', error); // Debugging
            return of(OrderActions.addOrderFailure({ error: error.message }));
          })
        );
      })
    ));

  constructor(
    private actions$: Actions,
    private orderApiService: OrderApiService
  ) {}
}