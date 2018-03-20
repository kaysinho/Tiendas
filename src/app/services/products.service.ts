import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './../models/product'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'


@Injectable()
export class ProductsService {

  constructor(private http: HttpClient) { }

  getProducts(){
    return this.http.get<Product>('assets/products.json').map(res => res['products']);
  }

  /*getProductsByCategory(categoryId){
    return this.http.get<Product>('assets/products.json').map(res => res['products'])
          .filter(product => product.sublevel_id == 3);
  }*/

}
