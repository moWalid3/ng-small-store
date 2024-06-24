import { Component, OnInit } from '@angular/core';
import { Product } from '../../../products/interfaces/product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
  cartProducts: Product[] = [];
  totalPrice: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.getCartProducts();
    this.calcTotalPrice();  
  }

  getCartProducts() {
    this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
  }

  calcTotalPrice() {
    this.totalPrice = 0;
    this.cartProducts.forEach(product => this.totalPrice += (product.price * product.quantity));
  }

  handleIncrease(index: number) {
    this.cartProducts[index].quantity++;
    this.updateStorage();
  }

  handleDecrease(index: number) {
    this.cartProducts[index].quantity--;
    this.updateStorage();
  }

  handleRemoveFromCart(index: number) {
    this.cartProducts.splice(index, 1);
    this.updateStorage();
  }

  updateStorage() {
    this.calcTotalPrice();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }

  handleClearCart() {
    this.cartProducts = [];
    localStorage.removeItem('cart');
  }


}
