import { Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [

    { path: '', component: ProductListComponent },
    { path: 'add-product', component: ProductAddComponent },
    { path: 'product/:id', component: ProductDetailsComponent },


];
