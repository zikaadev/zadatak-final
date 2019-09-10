import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { ServicesComponent } from './services.component';
import { ServicesRoutingModule } from './services-routing.module';
import { ServicesService } from './services.service';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ServicesComponent],
  imports: [
    CommonModule,
    SharedModule,
    TranslateModule,
    ReactiveFormsModule,
    FormsModule,
    ServicesRoutingModule
  ],
  providers: [ServicesService]
})
export class ServicesModule { }
