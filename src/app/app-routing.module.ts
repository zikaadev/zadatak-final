import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Route } from '@app/core';

const routes: Routes = [
  Route.withShell([
    // { path: 'home', loadChildren: 'app/home/home.module#HomeModule' },
    { path: 'about', loadChildren: 'app/about/about.module#AboutModule' },
    { path: 'products-list', loadChildren: 'app/products-list/products.module#ProductsModule' },
    { path: 'administration', loadChildren: 'app/administration/administration.module#AdministrationModule' },
    { path: 'services', loadChildren: 'app/services/services.module#ServicesModule' }
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {}
