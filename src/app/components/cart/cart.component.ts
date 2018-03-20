import { Component, OnInit } from '@angular/core';
import { SalesService } from '../../services/sales.service'
import { Product } from '../../models/product';
import { CategoriesService } from '../../services/categories.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  products:Product[] = this.salesService.getCart()
  total:number = 0
  sale:boolean=false
  constructor(private salesService:SalesService) { 

  }

  

  ngOnInit() {
    this.getTotal()
  }

  addPedido(){
    this.salesService.addPedido()
    this.products = this.salesService.getCart()
    this.sale = true
  }

  getTotal(){
    this.total=0
    for (let product of this.products){
      this.total = this.total + product.totalValueSale
    }
  }

  refreshPrice(product:Product){
    product.quantitySales<=0?1:product.quantitySales
    product.totalValueSale = product.priceFloat*product.quantitySales
    this.salesService.updateProduct(product)
    this.products = this.salesService.getCart()
    this.getTotal()
  }

  deleteProduct(index:number){
    this.salesService.deleteProduct(index);
    this.getTotal()
  }



}
