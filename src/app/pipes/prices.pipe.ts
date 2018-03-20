import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';
@Pipe({
  name: 'prices'
})
export class PricesPipe implements PipeTransform {
  convertFloat(number:string):number{
    let price:number
    price= parseFloat(number.replace("$","").replace(",","."))
    return price
  }
  transform(product:Product[], since: number, until:number): any[] {
    if (!product) {
      return null
    }

    if (since<0 || since==null || since==undefined){
      since = 0
    }else if(until==null || until==undefined || until==0){
      until=500000
    }

    return product.filter(item => this.convertFloat(item.price) >= since && this.convertFloat(item.price) <= until);
    
  }
}
