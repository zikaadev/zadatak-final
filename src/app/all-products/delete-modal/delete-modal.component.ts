import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '@app/core/models/product.model';
import { ProductService } from '@app/all-products/product.service';

@Component({
  selector: 'app-delete-modal',
  templateUrl: './delete-modal.component.html',
  styleUrls: ['./delete-modal.component.scss']
})
export class DeleteModalComponent {
  @Input() selectedProduct: Product;
  param = { value: 'world' };
  confirmDelete = new EventEmitter<boolean>();
  modalState = false;

  constructor(public activeModal: NgbActiveModal, private productService: ProductService) { }

  setConfirm() {
    this.activeModal.close();
    // this.confirmDelete.emit(true);
  }

  setCancel() {
    this.activeModal.close();
  }

  isIn(): boolean {
    return this.modalState;
  }

  delete(selectedProduct: Product) {
    this.selectedProduct = selectedProduct;
    this.productService.deleteProduct(this.selectedProduct.id).subscribe((res: any) => {
      this.productService.getAllProducts().subscribe();
      this.activeModal.dismiss();
    });
  }
}
