import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract, AuthenticationGuard } from '@app/core';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'all-products',
    pathMatch: 'full'
  },
  {
    path: 'new-product',
    component: ProductsComponent,
    data: { title: extract('New Product') },
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'product/:id',
    component: ProductsComponent,
    data: { title: extract('Update Product') },
    canActivate: [AuthenticationGuard]
  },
  {
    path: 'all-products',
    component: AllProductsComponent,
    data: { title: extract('All Products') },
    canActivate: [AuthenticationGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdministrationRoutingModule {}
