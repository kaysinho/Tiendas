import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';
@Pipe({
  name: 'quantity',
  pure: false
})
export class QuantityPipe implements PipeTransform {

  transform(product:Product[], quantity: number): any[] {
    if (!product) {
      return null
    } else if (quantity<=0) {
      return product
    }else{
      return product.filter(item => item.quantity >= quantity);
    }
  }

}
