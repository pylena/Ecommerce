import { createAction, props } from '@ngrx/store';
import { Product } from './Product.reducers';

// Define product actions for loading
export const loadProduct = createAction('[Product Page] loadProduct');

export const loadProductsSuccess = createAction(
  '[Product Page] Load Products Success',
  props<{ products: Product[] }>()
);

export const loadProductsFailure = createAction(
  '[Product Page] Load Products Failure',
  props<{ error: string }>()
);

// Add product action

export const addProduct = createAction(
  '[Product] Add Product',
  props<{ product: Product }>()
);

// Delete Product
export const deleteProduct = createAction(
  '[Product Page] Delete Product',
  props<{ id: string }>()
);
  
  
  export const editProduct = createAction(
    '[Product Page] Edit Product',
    props<{ id: string; name?: string; description?: string; price?: string; imageUrl?: string }>()
  );
  
  export const getProduct = createAction(
    '[Product Page] Get Product',
    props<{ id: string }>()
  ); // get product by ID
  
  