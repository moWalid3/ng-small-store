import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product: Product = {} as Product;
  @Output() clickedProduct = new EventEmitter();

  constructor() {
    
  }

  add() {
    this.clickedProduct.emit(this.product);
  }
}
