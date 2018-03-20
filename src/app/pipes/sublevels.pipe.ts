import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '../models/category';

@Pipe({
  name: 'sublevels'
})
export class SublevelsPipe implements PipeTransform {

  transform(category:Category[]): any[] {
    if (!category) {
      return null
    } else {
      return category.filter(item => item.sublevels?item:null);
    }
  }

}
