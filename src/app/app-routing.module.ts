import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './products/components/all-products/all-products.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { CartComponent } from './cart/components/cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: "full" },
  { path: 'products', component: AllProductsComponent},
  { path: 'product-details/:id', component: ProductDetailsComponent},
  { path: 'cart', component: CartComponent},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
