import { Injectable } from '@angular/core';
import { Service } from '@app/core/models/service.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { PersistenceService } from '../core/services/persistence.service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  apiUrl = 'http://localhost:3000/services';
  constructor(private http: HttpClient, private persistenceService: PersistenceService) { }

  getAllServices(): Observable<Service[]> {
    return this.http.get(this.apiUrl)
      .pipe(
        map((res: any) => res as Service[]),
        catchError((err: any) => this.persistenceService.handleError(err))
      );
  }

}
