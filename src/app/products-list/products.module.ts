import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '@app/core/pipes/pipes.module';
import { FindByName } from '@app/core/pipes/find-by-name.pipe';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ProductService } from '@app/administration/product.service';

@NgModule({
  declarations: [ProductsListComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    TranslateModule,
    ProductsRoutingModule,
    SimpleNotificationsModule,
    PipesModule,
    NgbModule.forRoot(),
    NgbModalModule
  ],
  providers: [FindByName, ProductService],
  exports: [TranslateModule]
})
export class ProductsModule {}
