import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideStore, provideState } from '@ngrx/store';
import { productReducer } from './State/Product/Product.reducers';
import { provideHttpClient } from '@angular/common/http';
import { ProductEffects } from './State/Product/Product.effects';
import { provideEffects } from '@ngrx/effects';
import { OrderEffects } from './State/Order/Order.effects';
import { orderReducer } from './State/Order/Order.reducers';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideStore({ products: productReducer,   orders: orderReducer  }),
  provideEffects([ProductEffects, OrderEffects]),
  provideHttpClient(),

  ]
};
