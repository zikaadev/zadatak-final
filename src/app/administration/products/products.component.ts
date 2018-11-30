import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '@app/core/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Response } from '@angular/http';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  selectedFile: File = null;
  selectedProduct: Product = { id: null, title: '', description: '', price: null, image: '', quantity: '' };
  mode = 'new';
  id: number;
  imageUrl = 'default.png';
  fileToUpload: File;
  param = { value: 'world' };
  productsForm: FormGroup;

  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      if (params['id']) {
        this.id = params['id'];
        this.productService.getProductsById(this.id).subscribe((data: Product) => {
          this.selectedProduct = data;
        });
        this.mode = 'update';
      } else {
        this.mode = 'new';
      }
    });
  }

  onFileSelected(event: any) {
    console.log(event);

    const reader = new FileReader();
    if (event.target.files && event.target.files.length > 0) {
      this.selectedFile = <File>event.target.files[0];
    }

    console.log('Image: ' + this.selectedProduct.image);
    console.log('File:' + this.selectedFile);
  }

  onUpload() {
    this.productService.uploadImage(this.selectedFile).subscribe((res: any) => console.log(res));
  }

  save() {
    if (this.mode === 'new') {
      this.selectedProduct.image = this.selectedProduct.image
        ? this.selectedProduct.image
        : this.getImageName(this.selectedFile);
      this.productService.addProduct(this.selectedProduct).subscribe((res: any) => {
        this.router.navigate(['/all-products']);
      });
    } else {
      this.selectedProduct.image = this.selectedProduct.image
        ? this.selectedProduct.image
        : this.getImageName(this.selectedFile);
      this.productService.updateProduct(this.selectedProduct).subscribe((res: any) => {
        this.router.navigate(['/all-products']);
      });
    }
    this.setMode('new');
  }

  getImageName(file: File) {
    if (file) {
      return this.selectedFile.name;
    } else {
      return this.imageUrl;
    }
  }

  cancel() {
    this.router.navigate(['/all-products']);
  }

  setMode(mode: string) {
    this.mode = mode;
  }
}
