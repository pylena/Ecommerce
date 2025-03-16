import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import * as ProductAction from './Product.actions';
import { catchError, map, mergeMap, of } from 'rxjs';
import { ProductApiService } from '../../product-api.service'

@Injectable()
export class ProductEffects {
  loadProducts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ProductAction.loadProduct),
      mergeMap(() =>
        this.productService.getProducts().pipe(
          map((products) => {
            console.log('Fetched products:', products);
            return ProductAction.loadProductsSuccess({ products });
          }),
          catchError((error) =>
            of(ProductAction.loadProductsFailure({ error: error.message }))
          )
        )
      )
    )
  );


  constructor(
    private actions$: Actions,
    private productService: ProductApiService
  ) { }
}