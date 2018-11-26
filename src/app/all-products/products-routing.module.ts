import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { Route, extract, AuthenticationGuard } from '@app/core';
import { AllProductsComponent } from './all-products.component';
import { ProductsComponent } from '@app/all-products/products/products.component';
import { ProductFormComponent } from '@app/all-products/product-form/product-form.component';

const routes: Routes = [
  Route.withShell([
    { path: 'products/new', component: ProductsComponent, data: { title: extract('Products') }, canActivate: [AuthenticationGuard] },
    { path: 'products/:id', component: ProductsComponent, data: { title: extract('Products') }, canActivate: [AuthenticationGuard] },
    { path: 'all-products', component: AllProductsComponent, data: { title: extract('All Products') }, canActivate: [AuthenticationGuard] }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProductsRoutingModule { }
