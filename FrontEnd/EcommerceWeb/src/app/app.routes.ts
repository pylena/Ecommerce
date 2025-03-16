import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { OrderListComponent } from './order-list/order-list.component';
import { PlaceOrderComponent } from './place-order/place-order.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

export const routes: Routes = [
     // for products
    { path: '', component: ProductListComponent },
    { path: 'add-product', component: ProductAddComponent },
    { path: 'product/:id', component: ProductDetailsComponent },
    //for orders
    { path: 'orders', component: OrderListComponent },
    { path: 'place-order', component: PlaceOrderComponent },
    { path: 'order/:id', component: OrderDetailsComponent },


];
