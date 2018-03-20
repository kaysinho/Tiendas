import { Component, OnInit } from '@angular/core';
import { ProductsService } from './../../services/products.service';
import { CategoriesService } from '../../services/categories.service'
import { Product } from '../../models/product'
import { Category } from '../../models/category'
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/filter'
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  products: any;
  category:Category = {
    name:'',
    id:0,
    sublevels:[]
  };
  filters = {
    productName:'',
    quantity:'',
    available:true,
    price:{
      since:'',
      until:''
    }
  }
  
  categories:Category[];
  constructor(private productsService:ProductsService, 
    private categoriesService:CategoriesService,
    private activadedRoute:ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.activadedRoute.params.subscribe(params =>{
      this.category.name = params["category"]
      this.category.id = params["id"]
      console.log(this.category)
      this.getProducts();
    })
  }
  
  getCategories() {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories= data;
    });
  }
  getProducts() {
    this.productsService.getProducts()
    .subscribe(data => {
      this.products= data;
    });
  }

}
