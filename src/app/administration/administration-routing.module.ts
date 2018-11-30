import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract, AuthenticationGuard } from '@app/core';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductsComponent } from './all-products/products/products.component';

const routes: Routes = [
  Route.withShell([
    {
      path: 'products/new',
      component: ProductsComponent,
      data: { title: extract('Products') },
      canActivate: [AuthenticationGuard]
    },
    {
      path: 'products/:id',
      component: ProductsComponent,
      data: { title: extract('Products') },
      canActivate: [AuthenticationGuard]
    },
    {
      path: 'all-products',
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
