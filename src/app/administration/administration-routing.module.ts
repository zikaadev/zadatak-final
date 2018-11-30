import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract, AuthenticationGuard } from '@app/core';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  Route.withShell([
    {
      path: 'administration/products/new',
      component: ProductsComponent,
      data: { title: extract('New Product') },
      canActivate: [AuthenticationGuard]
    },
    {
      path: 'administration/products/:id',
      component: ProductsComponent,
      data: { title: extract('Update Product') },
      canActivate: [AuthenticationGuard]
    },
    {
      path: 'asdasda',
      component: AllProductsComponent,
      data: { title: extract('All Products') },
      canActivate: [AuthenticationGuard]
    }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AdministrationRoutingModule {}
