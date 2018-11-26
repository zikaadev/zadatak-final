import { Injectable } from '@angular/core';
import { findLocaleData } from '@angular/common/src/i18n/locale_data_api';

@Injectable()
export class Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: FormData;
  quantity: number;

  constructor(id: number, title: string, description: string, price: number, image: string, quantity: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = new FormData();
    this.quantity = quantity;
  }
}
