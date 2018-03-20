import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(product:Product[], categoryId: number): any[] {
    if (!product) {
      return null
    } else {
      return product.filter(item => item.sublevel_id == categoryId);
    }
  }

}
