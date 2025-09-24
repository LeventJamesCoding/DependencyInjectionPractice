import { Component, signal, Inject } from '@angular/core';
import { ProductService } from './productservice';

@Component({
  selector: 'app-root',
  template: ``,
  standalone: false,
  styleUrl: './app.scss',
})
export class App {
  constructor(@Inject(ProductService) private productService:ProductService){
    console.log(productService.getProducts());
  }
}