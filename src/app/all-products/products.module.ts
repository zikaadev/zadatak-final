import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { AllProductsComponent } from './all-products.component';

import { ProductsComponent } from './products/products.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '@app/core/pipes/pipes.module';
import { FindByName } from '@app/core/pipes/find-by-name.pipe';
import { ProductsModalComponent } from './products-modal/products-modal.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { ProductService } from './product.service';
import { CoreModule } from '@app/core';
import { FormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';

@NgModule({
  declarations: [
    AllProductsComponent,
    ProductsComponent,
    ProductsModalComponent,
    DeleteModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    BrowserModule,
    FormsModule,
    TranslateModule,
    ProductsRoutingModule,
    SimpleNotificationsModule,
    PipesModule,
    NgbModule.forRoot(),
    NgbModalModule,
    CoreModule
  ],
  entryComponents: [ProductsModalComponent, DeleteModalComponent],
  providers: [FindByName, ProductService],
  exports: [TranslateModule]
})
export class ProductsModule { }
