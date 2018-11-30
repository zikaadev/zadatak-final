import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '@app/core/models/product.model';
import { ProductService } from '@app/administration/all-products/product.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  @Input() selectedProduct: Product;
  param = { value: 'world' };
  @Output() deleteProduct = new EventEmitter<boolean>();

  constructor(public activeModal: NgbActiveModal, private productService: ProductService) {}

  productDeleted(confirm: boolean) {
    this.deleteProduct.emit(true);
    this.activeModal.close();
  }

  setCancel() {
    this.activeModal.close();
  }
}
