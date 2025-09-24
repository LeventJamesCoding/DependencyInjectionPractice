import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ProductService } from './productservice';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';

@NgModule({
  declarations: [
    App
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ProductService
  ],
  bootstrap: [App]
})
export class AppModule { }
