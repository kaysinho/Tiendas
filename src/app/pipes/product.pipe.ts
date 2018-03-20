import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';
@Pipe({
  name: 'productByName'
})
export class ProductPipe implements PipeTransform {

  transform(product:Product[], name: string): any[] {
    if (!product) {
      return null
    } else if (name=="" || name==undefined || name==null) {
      return product
    }else{
      return product.filter(item => item.name.toLowerCase().indexOf(name.toLowerCase()) >= 0);
    }
  }

}
