import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '@app/core/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
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
  base64textString: any = [];

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
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = this.handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
      this.selectedProduct.image = reader.result.toString();
    }
  }

  handleReaderLoaded(event: any) {
    this.base64textString.push('data:image/png;base64,' + btoa(event.target.result));
    this.selectedFile = this.base64textString[0];
    this.selectedProduct.image = this.base64textString[0];
  }

  save() {
    this.selectedProduct.image = this.selectedProduct.image ? this.selectedProduct.image : this.selectedFile.name;
    if (this.mode === 'new') {
      this.productService.addProduct(this.selectedProduct).subscribe((res: any) => {
        this.router.navigate(['/administration/all-products']);
      });
    } else {
      this.productService.updateProduct(this.selectedProduct).subscribe((res: any) => {
        this.router.navigate(['/administration/all-products']);
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
