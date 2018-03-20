import { Injectable } from '@angular/core';
import { Product } from './../models/product'


@Injectable()
export class SalesService {
  sales: Product[] = localStorage.getItem("myCart") == null ? [] : JSON.parse(localStorage.getItem("myCart"))
  constructor() {

  }

  refreshSales() {
    localStorage.setItem("myCart", JSON.stringify(this.sales))
  }

  addPedido(){
    localStorage.removeItem("myCart");
    this.sales = []
  }

  updateProduct(product: Product) {
    for (let p of this.sales) {
      if (p.id == product.id) {
        p = product
        this.refreshSales()
        break;
      }
    }
  }

  deleteProduct(index: number) {
    this.sales.splice(index, 1)
    this.refreshSales()
  }

  addProduct(product: Product) {
    let exist: boolean = false;
    if (this.sales != null) {
      for (let p of this.sales) {
        if (p.id == product.id) {
          exist = true;
        }
      }
    } else {
      exist = false;
    }

    if (!exist) {
      product.quantitySales = 1
      product.priceFloat = this.convertFloat(product.price)
      product.totalValueSale = product.quantitySales * product.priceFloat
      this.sales.push(product)
      this.refreshSales()
    }

  }

  convertFloat(number: string): number {
    let price: number
    price = parseFloat(number.replace("$", "").replace(",", "."))
    return price
  }

  getCart() {
    this.sales = localStorage.getItem("myCart") == null ? [] : JSON.parse(localStorage.getItem("myCart"))
    return this.sales
  }

}
