import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '@app/core/models/product.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { PersistenceService } from '@app/core/services/persistence.service';
import { NotificationsService } from 'angular2-notifications';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  path = this.persistenceService.apiUrl;
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
  success: any = this.translateService.get('notif.success');
  deleted: any = this.translateService.get('notif.deleted');
  updated: any = this.translateService.get('notif.updated');
  added: any = this.translateService.get('notif.added');
  uploaded: any = this.translateService.get('notif.uploaded');

  constructor(
    private http: HttpClient,
    private persistenceService: PersistenceService,
    private notificationsService: NotificationsService,
    private translateService: TranslateService
  ) {}

  getAllProducts(): Observable<Product[]> {
    return this.http.get(this.path).pipe(
      map((data: any) => {
        return data as any;
      }),
      catchError((err: any) => this.persistenceService.handleError(err))
    );
  }

  getProductsById(id: number): Observable<Product> {
    return this.http.get(this.path + '/' + id).pipe(
      map((data: any) => {
        return data as any;
      }),
      catchError((err: any) => this.persistenceService.handleError(err))
    );
  }

  deleteProduct(id: number): Observable<Product> {
    return this.http.delete(this.path + '/' + id).pipe(
      map((data: any) => {
        this.notificationsService.success(this.success.value, this.deleted.value, this.notificationsOptions);
        return data as any;
      }),
      catchError((err: any) => this.persistenceService.handleError(err))
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post(this.path, product, this.options).pipe(
      map((data: any) => {
        this.notificationsService.success(this.success.value, this.added.value, this.notificationsOptions);
        return data as any;
      }),
      catchError((err: any) => this.persistenceService.handleError(err))
    );
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put(this.path + '/' + product.id, product, this.options).pipe(
      map((data: any) => {
        this.notificationsService.success(this.success.value, this.updated.value, this.notificationsOptions);
        return data as any;
      }),
      catchError((err: any) => this.persistenceService.handleError(err))
    );
  }

  uploadImage(file: File) {
    return this.http.post(this.path, file).pipe(
      map((res: any) => {
        this.notificationsService.success(this.success.value, this.uploaded.value, this.notificationsOptions);
        return res as any;
      }),
      catchError((err: any) => this.persistenceService.handleError(err))
    );
  }

  // getImage(imageUrl: string): Observable<File> {
  // return this.http.get(imageUrl, { responseType: ResponseContentType.Blob })
  //   .map((res: Response) => res.blob());
  // }
}
