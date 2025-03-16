import { createSelector, createFeatureSelector } from '@ngrx/store';
import { ProductState } from './Product.reducers';

export const selectProductState = createFeatureSelector<ProductState>('products');

export const selectAllProducts = createSelector(
    selectProductState,
    (state) => state.products
  );

//to Get Selected Product
export const selectProductError = createSelector(
    selectProductState,
    (state) => state.error
  );
  

