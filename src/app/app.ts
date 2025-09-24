import { Component, signal, Inject } from '@angular/core';
import { ProductService } from './productservice';
import { productServiceIT } from './injection-token';

@Component({
  selector: 'app-root',
  template: ``,
  standalone: false,
  styleUrl: './app.scss',
}) 
export class App {    
  //constructor(@Inject(productServiceIT) private productService:ProductService, @Inject("example") func:any){
  //  console.log(productService.getProducts());
  //  console.log(func());
}