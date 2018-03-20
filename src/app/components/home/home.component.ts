import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../services/products.service';
import { SalesService } from '../../services/sales.service'
import { Product } from '../../models/product'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  products: any;
  filters = {
    productName:'',
    quantity:'',
    available:true,
    price:{
      since:'',
      until:''
    }
  }
  
  constructor(private productsService:ProductsService, private salesService:SalesService) { }

  ngOnInit() {
    this.getAllProducts()
  }

  getAllProducts() {
    this.productsService.getProducts().subscribe(data => {
      this.products= data;
    });
  }

  addCart(product:Product){
    this.salesService.addProduct(product)
  }

}
