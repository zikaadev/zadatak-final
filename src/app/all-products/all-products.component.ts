import { Component, OnInit, Output } from '@angular/core';
import { ProductService } from '@app/all-products/product.service';
import { Product } from '@app/core/models/product.model';

import { TranslateService } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProductsModalComponent } from './products-modal/products-modal.component';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import { Modal, BSModalContext } from 'ngx-modialog/plugins/bootstrap';
import { overlayConfigFactory } from 'ngx-modialog';
import { Router } from '@angular/router';
import { NotificationsService } from 'angular2-notifications';

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
  // isLoaded = false;
  // modalState = false;

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
  ) {
    // if (this.isLoaded === false) {
    //   this.getProducts();
    // }
  }

  ngOnInit() {
    this.getProducts();
    this.notificationsService.success('Success', 'Data loaded', {
      timeOut: 3000,
      showProgressBar: true,
      pauseOnHover: true,
      clickToClose: true
    });
    // this.isLoaded = true;
  }

  getProducts() {
    this.productService.getAllProducts().subscribe((data: any) => (this.products = data));
  }

  openProductModal(product: Product) {
    const modalRef = this.modalService.open(ProductsModalComponent);
    modalRef.componentInstance.selectedProduct = product;
    // this.getProducts();
  }

  openDeleteModal(product: Product) {
    this.selectedProduct = product;
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.selectedProduct = product;
    // this.modalState = true;
  }

  confirmDelete(confirmed: boolean) {
    // if (confirmed) {
    //   this.delete();
    // } else { this.modalState = false; }
  }

  delete() {
    this.productService.deleteProduct(this.selectedProduct.id).subscribe((res: any) => {
      this.productService.getAllProducts().subscribe();
    });
  }

  performFilter(filterBy: string): Product[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: Product) => product.title.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  setActiveProduct(product: Product) {
    this.router.navigate(['/products/' + product.id]);
  }
}
