import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoaderComponent } from './loader/loader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SimpleNotificationsModule } from 'angular2-notifications';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [CommonModule, NgbModule, SimpleNotificationsModule, TranslateModule],
  declarations: [LoaderComponent],
  exports: [LoaderComponent, SimpleNotificationsModule]
})
export class SharedModule {}
