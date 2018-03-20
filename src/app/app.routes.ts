import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CartComponent } from './components/cart/cart.component'
import { CategoryComponent } from './components/category/category.component'

const AppRouteModule: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'category/:category/:id', component: CategoryComponent },
    { path: 'cart', component: CartComponent },
    { path: '**', pathMatch: 'full', redirectTo:'home' }
];

export const AppRoutingModule = RouterModule.forRoot(AppRouteModule, { useHash: true });