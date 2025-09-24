import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from './productservice';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { productServiceIT } from './injection-token';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    //-------Dependency Injection Tokens-------
    //ProductService, //Defult Type Token
    //{provide:ProductService, useClass:ProductService}, //Type Token
    //{provide:"productService", useClass:ProductService} //String Token
    //{provide: productServiceIT, useClass:ProductService} 
    //{provide: "example", useValue: () => {return "merhaba"}},
    {
      provide: "productService", useFactory: (httpClient: HttpClient) => {
        const obs = httpClient.get("https://jsonplaceholder.typicode.com/posts");
        const data = await firstValueFrom(obs);
        console.log(data);
        return ProductService;
      }, deps:[HttpClient]
    }
  ],
  bootstrap: [App]
})
export class AppModule { }
