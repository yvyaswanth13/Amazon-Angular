import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductComponent } from './product/product.component';
import { OrdersComponent } from './orders/orders.component';
//import { AddressComponent } from './address/address.component';
import { BillComponent } from './bill/bill.component';
import { CartComponent } from './cart/cart.component';
import { FormsModule } from '@angular/forms';
import { UserAddressComponent } from './user-address/user-address.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    CartComponent,
    BillComponent,
    OrdersComponent,
    
    UserAddressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
