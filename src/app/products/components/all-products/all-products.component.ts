import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../interfaces/product';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrl: './all-products.component.scss'
})
export class AllProductsComponent implements OnInit{
  allProducts: Product[] = [];
  cartProducts: Product[] = [];
  finalProducts: Product[] = [];
  allCategories: string[] = [];
  selectedCategory: string = 'All';
  constructor(private _ProductsService: ProductsService, private spinner: NgxSpinnerService){}

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
  }

  getAllProducts(){
    this.spinner.show();
    this._ProductsService.getAllProducts().subscribe({
      next: (res:Product[]) => {
        this.allProducts = res;
        this.finalProducts = this.allProducts;
        this.spinner.hide();
      },
      error: err => console.log(err)
    })
  }

  getAllCategories(){
    this._ProductsService.getAllCategories().subscribe({
      next: (res:string[]) => this.allCategories = res,
      error: err => console.log(err)
    })
  }

  handleSelect() {
    if(this.selectedCategory === 'All') {
      this.finalProducts = this.allProducts;
    } else {
      this.finalProducts = this.allProducts.filter(product => product.category === this.selectedCategory);
    }
  }

  handleAddToCart(product: Product) {
    if('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      let exist = false;

      this.cartProducts.forEach(prod => {
        if(prod.id === product.id) {
          prod.quantity++;
          exist = true;
          return;
        }
      })

      if(!exist) {
        product.quantity = 1;
        this.cartProducts.push(product);
      }
      
    } else {
      product.quantity = 1;
      this.cartProducts.push(product);
    }

    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
}
