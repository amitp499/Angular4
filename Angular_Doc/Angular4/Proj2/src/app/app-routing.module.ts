import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from 'src/app/home/home.component';
import { LoginComponent } from 'src/app/login/login.component';
import { RegisterComponent } from 'src/app/register/register.component';
import { ProductlistComponent } from 'src/app/productlist/productlist.component';
import { AboutusComponent } from 'src/app/aboutus/aboutus.component';
import { ShoppingitemComponent } from 'src/app/shoppingitem/shoppingitem.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'product', component: ProductlistComponent},
  {path: 'aboutus', component: AboutusComponent},
  {path: 'shoppingitem', component: ShoppingitemComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
