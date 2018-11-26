import { Component, OnInit, Input } from '@angular/core';
import { Product } from '@app/core/models/product.model';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
  @Input() selectedProduct: Product; // = new Product(null, '', '', null, '../../assets/images/product.png', null);
  @Input() mode: string;
  submitted = false;

  constructor(private productService: ProductService) {}

  save(mode: string) {
    console.log(this.selectedProduct);
    this.submitted = true;
    if ((this.mode = 'new')) {
      this.productService.addProduct(this.selectedProduct).subscribe();
    } else {
      this.productService
        .updateProduct(this.selectedProduct)
        .subscribe
        // this.mode = 'new';
        ();
    }
  }
}
