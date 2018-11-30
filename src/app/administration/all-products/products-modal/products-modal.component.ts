import { Component, Input } from '@angular/core';
import { Product } from '@app/core/models/product.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-products-modal',
  templateUrl: './products-modal.component.html',
  styleUrls: ['./products-modal.component.scss']
})
export class ProductsModalComponent {
  @Input() selectedProduct: Product;
  param = { value: 'world' };

  constructor(public activeModal: NgbActiveModal) {}
}
