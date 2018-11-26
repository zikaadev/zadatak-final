import { Injectable } from '@angular/core';
import { findLocaleData } from '@angular/common/src/i18n/locale_data_api';

@Injectable()
export class Product {
  id: number;
  title: string;
  description: string;
  price: string;
  image: string;
  quantity: string;

  // constructor(id: number, title: string, description: string, price: string, image: string, quantity: string) {
  //   this.id = id;
  //   this.title = title;
  //   this.description = description;
  //   this.price = price;
  //   this.image = this.image;
  //   this.quantity = quantity;
  // }
}
