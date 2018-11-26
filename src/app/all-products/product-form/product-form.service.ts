import { ProductService } from '@app/all-products/product.service';
import { Product } from '@app/core/models/product.model';
import { Input, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductFormService {
  @Input() selectedProduct: Product;

  constructor(private productService: ProductService) {}

  setData(product: Product) {
    this.selectedProduct = product;
  }
}
