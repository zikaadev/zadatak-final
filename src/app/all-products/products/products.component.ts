import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '@app/core/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Image } from '@app/core/models/image.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  selectedFile: File = null;
  selectedProduct = new Product(null, '', '', '', '', '');
  mode = 'new';
  id: number;
  imageUrl = 'default.png';
  fileToUpload: File;

  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => (this.id = + params['id']));
    console.log(this.id);
    this.mode = this.id ? 'update' : 'new';
    this.productService.getProductsById(this.id).subscribe((data: Product) => {
      this.selectedProduct = data;
    });
  }

  onFileSelected(event: any) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    this.selectedProduct.image = this.getImageName(this.selectedFile);
    console.log(this.selectedFile);
  }

  onUpload() {
    this.productService.uploadImage(this.selectedFile)
      .subscribe((res: any) => console.log(res));
  }

  save() {
    if (this.mode === 'new') {
      this.selectedProduct.image = this.selectedProduct.image ?
        this.selectedProduct.image : this.getImageName(this.selectedFile);
      this.productService.addProduct(this.selectedProduct).subscribe((res: any) => {
        console.log('Product added!');
        this.productService.getAllProducts().subscribe();
        this.router.navigate(['/all-products']);
      });
    } else {
      this.selectedProduct.image = this.selectedProduct.image ?
        this.selectedProduct.image : this.getImageName(this.selectedFile);
      this.productService.updateProduct(this.selectedProduct).subscribe((res: any) => {
        console.log('Product updated!');
        this.productService.getAllProducts().subscribe();
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
