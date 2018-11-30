import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsModalComponent } from './products-modal/products-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { ProductService } from '../product.service';
import { Product } from '@app/core/models/product.model';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.scss']
})
export class AllProductsComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;
  mode = 'update';
  param = { value: 'world' };
  filteredProducts: Product[];

  _searchText: string;
  get searchText(): string {
    return this._searchText;
  }
  set searchText(value: string) {
    this._searchText = value;
    this.filteredProducts = this.searchText ? this.performFilter(this.searchText) : this.products;
  }

  constructor(
    private translateService: TranslateService,
    private modalService: NgbModal,
    private productService: ProductService,
    private router: Router,
    private notificationsService: NotificationsService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((data: any) => (this.products = data));
  }

  openProductModal(product: Product) {
    const modalRef = this.modalService.open(ProductsModalComponent);
    modalRef.componentInstance.selectedProduct = product;
  }

  openDeleteModal(product: Product) {
    this.selectedProduct = product;
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.selectedProduct = product;
    modalRef.componentInstance.deleteProduct.subscribe((res: any) => this.delete());
  }

  delete() {
    this.productService.deleteProduct(this.selectedProduct.id).subscribe((res: any) => this.getProducts());
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) => product.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  setActiveProduct(product: Product) {
    this.router.navigate(['/products/' + product.id]);
  }
}
