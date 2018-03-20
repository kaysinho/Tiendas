import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'

//Routes
import { AppRoutingModule } from './app.routes'

//Services
import { CategoriesService } from './services/categories.service';
import { ProductsService } from './services/products.service'
import { SalesService } from './services/sales.service'

//Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryPipe } from './pipes/category.pipe';
import { SublevelsPipe } from './pipes/sublevels.pipe';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { QuantityPipe } from './pipes/quantity.pipe';
import { ProductPipe } from './pipes/product.pipe';
import { PricesPipe } from './pipes/prices.pipe';
import { AvailablePipe } from './pipes/available.pipe';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CartComponent,
    CategoryComponent,
    CategoryPipe,
    SublevelsPipe,
    SidebarComponent,
    QuantityPipe,
    ProductPipe,
    PricesPipe,
    AvailablePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    CategoriesService,
    ProductsService,
    SalesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
