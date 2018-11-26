import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Route, extract } from '@app/core';
import { AllProductsComponent } from './all-products.component';
import { ProductsComponent } from '@app/all-products/products/products.component';
import { ProductFormComponent } from '@app/all-products/product-form/product-form.component';

const routes: Routes = [
  Route.withShell([
    { path: 'products', component: ProductsComponent, data: { title: extract('Products') } },
    { path: 'products/:id', component: ProductsComponent, data: { title: extract('Products') } },
    { path: 'all-products', component: AllProductsComponent, data: { title: extract('All Products') } }
    // { path: 'product-form', component: ProductFormComponent, data: { title: extract('Product Form') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProductsRoutingModule {}
