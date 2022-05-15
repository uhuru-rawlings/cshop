import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CartComponent } from './cart/cart.component';
import { ItemsComponent } from './items/items.component';
import { HistoryComponent } from './history/history.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { DetailsComponent } from './details/details.component';


const routes: Routes = [
  {path: '',component:RegisterComponent},
  {path: 'cshop',component:HomepageComponent},
  {path: 'cshop/cart',component:CartComponent},
  {path: 'cshop/items',component:ItemsComponent},
  {path: 'cshop/history',component:HistoryComponent},
  {path: 'cshop/checkout',component:CheckoutComponent},
  {path: 'cshop/details',component:DetailsComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const navLinks = [RegisterComponent,HomepageComponent,CartComponent,ItemsComponent,HistoryComponent,CheckoutComponent,DetailsComponent]

// import { NgModule } from '@angular/core';
//





// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

