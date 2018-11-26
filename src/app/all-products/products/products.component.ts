import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '@app/core/models/product.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  selectedFile: File = null;
  selectedProduct = new Product(null, '', '', null, '', null);
  mode = 'new';
  id: number;
  imageUrl = 'assets/images/default.png';
  fileToUpload: File;

  constructor(
    private productService: ProductService,
    private http: HttpClient,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    console.log(this.mode);
    this.route.params.subscribe(params => (this.id = +params['id']));
    this.mode = this.id ? 'update' : 'new';
    this.productService.getProductsById(this.id).subscribe((data: Product) => {
      this.selectedProduct = data;
      this.imageUrl = this.selectedProduct.image.get.name;
      console.log('IMAGE URL: ' + this.imageUrl);
    });
  }

  onFileSelected(event: any) {
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
    console.log(this.selectedFile);
    // const reader = new FileReader();
    // reader.onload = (event: any) => {
    //   this.imageUrl = event.target.result;
    // }
    // reader.readAsDataURL(this.selectedFile);
  }

  onUpload() {
    const fd = new FormData();
    this.getImageName(this.selectedFile.name);
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http
      .post('http://localhost:3000/products', fd, {
        reportProgress: true,
        observe: 'events'
      })
      .subscribe((event: any) => {
        console.log(event);
      });
  }

  save() {
    // this.setMode('mode');mode: string
    if (this.mode === 'new') {
      this.productService.addProduct(this.selectedProduct).subscribe((res: any) => {
        console.log('Product added!' + this.selectedProduct);
        this.productService.getAllProducts().subscribe();
        this.router.navigate(['/all-products']);
      });
    } else {
      this.productService.updateProduct(this.selectedProduct).subscribe((res: any) => {
        console.log('Product updated!' + this.selectedProduct);
        this.productService.getAllProducts().subscribe();
        this.router.navigate(['/all-products']);
      });
    }
    this.setMode('new');
  }

  getImageName(imageName: string) {
    const name = imageName.split('"');
    console.log(name);
    return name;
  }
  // updateProduct(product: Product) {
  //   this.selectedProduct = product;
  //   this.setMode('update');
  // }

  cancel() {
    this.router.navigate(['/all-products']);
  }
  setMode(mode: string) {
    this.mode = mode;
  }
}
