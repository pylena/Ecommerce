import { createReducer, on } from "@ngrx/store";
import { state } from "@angular/animations";
import * as ProductAction from './Product.actions';


export interface Product {
    id: string // guid in backend
    name : string
    description: string
    price: Number
    imageUrl: string
}
/// Product State Interface

export interface ProductState {
    products: Product[];
    error: string | null;
    loading: boolean;
}
// Initial State
export const initialState: ProductState = {
    products: [],
    error: null,
    loading: true,
  };

//trigger actions

export const productReducer = createReducer(
  initialState,
  on(ProductAction.loadProduct, (state) => ({
    ...state,
    loading: true,
    error: null,
  })),
  on(ProductAction.loadProductsSuccess, (state, { products }) => ({
    ...state,
    products,
    loading: false,
  })),
  on(ProductAction.loadProductsFailure, (state, { error }) => ({
    ...state,
    error,
    loading: false,
  })),
  on(ProductAction.addProduct, (state, { product }) => ({
    ...state,
    products: [...state.products, product],
  })),
  on(ProductAction.deleteProduct, (state, { id }) => ({
    ...state,
    products: state.products.filter((p) => p.id !== id),
  }))
);