import { Component, OnInit } from '@angular/core';
import { Product } from '@app/core/models/product.model';
import { ProductService } from '@app/administration/product.service';
import { TranslateService } from '@ngx-translate/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';
import { ProductsModalComponent } from '@app/products-list/products-modal/products-modal.component';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
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

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) => product.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  setActiveProduct(product: Product) {
    this.router.navigate(['/products/' + product.id]);
  }
}
