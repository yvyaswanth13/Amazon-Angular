import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from './Address';

import { Router } from '@angular/router';

import { OrderServiceService } from './order-service.service';


@Injectable({
  providedIn: 'root'
})
export class OrderAPIService {

  public message:any;
  public getOrders(){
    return this.http.get("http://localhost:10649/Orders/getOrders");
  }

  constructor(private http:HttpClient,private router:Router) { }
  
  public addAddress(add: Address,uid:number){
    add.userId=uid;
    return this.http.post("http://localhost:10649/Orders",add,{responseType:'text' as 'json'});
   }
   goToBill(){
    console.log("Bill");
    this.router.navigate(['/','bill']);
  }
 // http://localhost:10649/Orders/GetById?id=1000

 public getOrdersByID(id:number)
 {
  return this.http.get("http://localhost:10649/Orders/GetById?id="+id);
  
 }
 public getAddByID(id:number)
 {
  return this.http.get("http://localhost:10649/Orders/GetUserAdd?uid="+id);
  
 }
 
 public getOItemsByID(id:number)
 {
  return this.http.get("http://localhost:10649/Orders/GetOrderItems?oid="+id);
  
 }
 
}
