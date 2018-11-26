import { Injectable } from '@angular/core';
import { Response } from '@angular/http';
import { NotificationsService } from 'angular2-notifications';
import { map, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { throwError } from 'rxjs';
import { environment } from '@env/environment';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class PersistenceService {
  apiUrl = environment.serverUrl;
  _errorHeppend = new BehaviorSubject<string>('');
  errorHappend$ = this._errorHeppend.asObservable();

  constructor(private notificationsService: NotificationsService) {}

  handleError(error: Response | any) {
    let errMsg = '';
    if ((error.error && error.error.length > 0) || error._body) {
      this.notificationsService.error('Error', error.error ? error.error : error._body, {
        timeOut: 3000,
        showProgressBar: true,
        pauseOnHover: true,
        clickToClose: true
      });
    }

    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }

    return throwError(errMsg);
  }
}
