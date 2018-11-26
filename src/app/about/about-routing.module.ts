import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route } from '@app/core';

import { extract } from '@app/core';
import { AboutComponent } from './about.component';

const routes: Routes = [
  Route.withShell([{ path: 'about', component: AboutComponent, data: { title: extract('About') } }])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class AboutRoutingModule {}
