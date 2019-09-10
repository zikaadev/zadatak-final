import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { extract } from '@app/core';
import { ServicesComponent } from './services.component';

const routes: Routes = [{ path: '', component: ServicesComponent, data: { title: extract('Services') } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class ServicesRoutingModule {}
