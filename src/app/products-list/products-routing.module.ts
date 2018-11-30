import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Route, extract, AuthenticationGuard } from '@app/core';
import { ProductsListComponent } from './products-list.component';

const routes: Routes = [
  Route.withShell([
    { path: 'products-list', component: ProductsListComponent, data: { title: extract('Products List') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ProductsRoutingModule {}
