import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { CoreModule } from '@app/core';
import { SharedModule } from '@app/shared';
import { HomeModule } from './home/home.module';
import { AboutModule } from './about/about.module';
import { LoginModule } from './login/login.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ProductsModule } from './all-products/products.module';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { PipesModule } from './core/pipes/pipes.module';
import { SimpleNotificationsModule, NotificationsService } from 'angular2-notifications';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http); // , './assets/i18n/', '.json'
}

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    NgbModule,
    CoreModule,
    SharedModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HomeModule,
    AboutModule,
    LoginModule,
    ProductsModule,
    CoreModule,
    ProductsModule,
    LoginModule,
    AppRoutingModule,
    PipesModule,
    HttpClientModule,
    SimpleNotificationsModule.forRoot(),
    AppRoutingModule // must be imported as the last module as it contains the fallback route
  ],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent],
  exports: [TranslateModule]
})
export class AppModule { }
