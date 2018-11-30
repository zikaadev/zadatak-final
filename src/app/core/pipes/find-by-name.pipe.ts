import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '@app/core/models/product.model';
@Pipe({
  name: 'findByName'
})
export class FindByName implements PipeTransform {
  transform(items: Product[], searchText: string): any[] {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(it => {
      return it.title.toLowerCase().includes(searchText) || it.description.toLowerCase().includes(searchText);
    });
  }
}
