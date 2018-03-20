import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './../../services/categories.service';
import { Category } from '../../models/category'
import 'rxjs/add/operator/map'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
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
