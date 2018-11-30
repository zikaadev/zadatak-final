import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsListComponent } from './products-list.component';
// import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '@app/core/pipes/pipes.module';
import { FindByName } from '@app/core/pipes/find-by-name.pipe';
// import { ProductsModalComponent } from './products-modal/products-modal.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
// import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { FormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { ProductService } from '@app/administration/all-products/product.service';

@NgModule({
  declarations: [
    ProductsListComponent
    // ProductsComponent, ProductsModalComponent, DeleteModalComponent
  ],
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
  // entryComponents: [ProductsModalComponent, DeleteModalComponent],
  providers: [FindByName, ProductService],
  exports: [TranslateModule]
})
export class ProductsModule {}
