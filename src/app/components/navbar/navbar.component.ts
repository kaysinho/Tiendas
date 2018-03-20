import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../../services/categories.service';
import { Category } from '../../models/category'
import 'rxjs/add/operator/map'


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  categories: Category[];
  constructor(private categoriesService:CategoriesService) { }

  ngOnInit() {
    this.getMenu()
  }

  getMenu() {
    this.categoriesService.getCategories().subscribe(data => {
      this.categories= data;
    });
  }

}
