import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';
@Pipe({
  name: 'available'
})
export class AvailablePipe implements PipeTransform {

  transform(product:Product[], available: boolean): any[] {
    if (!product) {
      return null
    } else {
      return product.filter(item => item.available == available);
    }
  }


}
