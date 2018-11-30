import { Injectable } from '@angular/core';

@Injectable()
export class Product {
  public id: number;
  public title: string;
  public description: string;
  public price: number;
  public image: string;
  public quantity: string;

  constructor(id: number, title: string, description: string, price: number, image: string, quantity: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.price = price;
    this.image = this.image;
    this.quantity = quantity;
  }
}
