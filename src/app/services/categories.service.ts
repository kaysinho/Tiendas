import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './../models/category'
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs'


@Injectable()
export class CategoriesService {
  categories:Category[] = [];
  constructor(private http: HttpClient) {
    this.http.get<Category>('assets/categories.json').map(res => res['categories']).subscribe(data => {
      this.categories= data;
    });
   }

  getCategories(){
    return this.http.get<Category>('assets/categories.json').map(res => res['categories']);
  }

  getCategoryC(id, category):any {

    if (category.id == id){
      console.log(category);
      return category;
    }else{
      if(category.hasOwnProperty('sublevels')){
        return category.sublevels.filter(this.getCategoryC.bind(this, 2121))
      }
    }
  
  }

  getCategory(id:number, categories:Category[]=[]):Category[]{
    if (categories.length==0){
      categories=this.categories
    }

    return categories.filter(category => 
      {
        if (category.id==id){
          console.log(category)
          return category
        }else{
          return this.getCategory(id, category.sublevels); 
        }
         
      })

    /*for (let categoryItem of categories){
      if (categoryItem.id==id){
        console.log(categoryItem);
        return categoryItem;
      }else{
        if(categoryItem.hasOwnProperty('sublevels')){
          return this.getCategory(id, categoryItem.sublevels);
        }
        
      }
    }*/
  }
}
