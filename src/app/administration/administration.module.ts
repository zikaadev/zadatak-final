import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './all-products/all-products.component';
import { ProductsComponent } from './all-products/products/products.component';
import { SharedModule } from '../shared/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { PipesModule } from '@app/core/pipes/pipes.module';
import { FindByName } from '@app/core/pipes/find-by-name.pipe';
import { ProductsModalComponent } from './all-products/products-modal/products-modal.component';
import { NgbModule, NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DeleteModalComponent } from './all-products/delete-modal/delete-modal.component';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { AdministrationRoutingModule } from './administration-routing.module';

@NgModule({
  declarations: [AllProductsComponent, ProductsComponent, ProductsModalComponent, DeleteModalComponent],
  imports: [
    CommonModule,
    SharedModule,
    CommonModule,
    FormsModule,
    TranslateModule,
    SimpleNotificationsModule,
    PipesModule,
    NgbModule.forRoot(),
    NgbModalModule,
    AdministrationRoutingModule
  ],
  entryComponents: [ProductsModalComponent, DeleteModalComponent],
  providers: [FindByName, ProductService],
  exports: [TranslateModule]
})
export class AdministrationModule {}
