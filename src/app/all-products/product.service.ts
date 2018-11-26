import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '@app/core/models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { PersistenceService } from '@app/core/services/persistence.service';
import { NotificationsService } from 'angular2-notifications';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  path = 'http://localhost:3000/products';
  options = {
    headers: new HttpHeaders({
      Accept: 'application/json',
      Authorization: 'my-token',
      'Access-Control-Allow-Origin': '*'
    })
  };
  public notificationsOptions = {
    position: ['bottom', 'right'],
    timeOut: 3000,
    lastOnBottom: true
  };
  loader: any;

  constructor(
    private http: HttpClient,
    private persistenceService: PersistenceService,
    private notificationsService: NotificationsService
  ) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get(this.path).pipe(
      map((data: any) => {
        // this.notificationsService.info('Info', 'Products loaded', this.notificationsOptions);
        return data as any;
      }),
      catchError((err: any) => this.persistenceService.handleError(err))
    );
  }

  getProductsById(id: number): Observable<Product> {
    return this.http.get(this.path + '/' + id).pipe(
      map((data: any) => {
        // this.notificationsService.success('Success', 'Product found', this.notificationsOptions);
        return data as any;
      }),
      catchError((err: any) => this.persistenceService.handleError(err))
    );
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete(this.path + '/' + id).pipe(
      map((data: any) => {
        this.notificationsService.success('Success', 'Product deleted', this.notificationsOptions);
        return data as any;
      }),
      catchError((err: any) => this.persistenceService.handleError(err))
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post(this.path, product, this.options).pipe(
      map((data: any) => {
        this.notificationsService.success('Success', 'Product added', this.notificationsOptions);
        return data as any;
      }),
      catchError((err: any) => this.persistenceService.handleError(err))
    );
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put(this.path + '/' + product.id, product, this.options).pipe(
      map((data: any) => {
        this.notificationsService.success('Success', 'Product updated', this.notificationsOptions);
        return data as any;
        // setTimeout(() => {
        //   this.isLoaded = true;
        // }, 200);
      }),
      catchError((err: any) => this.persistenceService.handleError(err))
    );
  }

  uploadImage(file: File) {
    return this.http.post('http://localhost:3000/images', file).pipe(
      map((res) => {
        return res as any;
        this.notificationsService.success('Success', 'Image uploaded', this.notificationsOptions);
      }),
      catchError((err: any) => this.persistenceService.handleError(err))
    );
  }
}
