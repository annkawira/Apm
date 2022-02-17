import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { productListComponent } from './products/product-list.component';
import { ProductDetailsComponent } from './products/product-details.component';
import { RouterModule } from '@angular/router';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent,
    productListComponent,
    ProductDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot([
      {path:'products',component:productListComponent},
      {path:'products/:id',component:ProductDetailsComponent}
    ]),
    ProductsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
