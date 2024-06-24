import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent implements OnInit{
  id : number = 0;
  product: Product = {} as Product;
  cartProducts: Product[] = [];
  constructor(private _ActivatedRoute: ActivatedRoute, private _ProductsService: ProductsService, private spinner: NgxSpinnerService) {
    
  }

  ngOnInit(): void {
    this.handleProductDetails();
  }
  
  handleProductDetails() {
    this._ActivatedRoute.paramMap.forEach(par => this.id = +par.get('id')!);
    this.getProduct(this.id);
  }

  getProduct(id: number) {
    this.spinner.show();
    this._ProductsService.getProduct(id).subscribe({
      next: res=> this.product = res,
      complete: ()=> this.spinner.hide()
    })
  }

  handleAddToCart() {
    if('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = false;

      this.cartProducts.forEach(prod => {
        if(prod.id === this.product.id) {
          prod.quantity++;
          exist = true;
          return;
        }
      })

      if(!exist) {
        this.product.quantity = 1;
        this.cartProducts.push(this.product);
      }
      
    } else {
      this.product.quantity = 1;
      this.cartProducts.push(this.product);
    }

    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
}
