import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Address } from './Address';


@Injectable({
  providedIn: 'root'
})
export class OrderAPIService {
  public getProducts(){
    return this.http.get("http://localhost:10649/Orders");
  }

  constructor(private http:HttpClient) { }
  public addAddress(product: Address){
    return this.http.post("http://localhost:10649/Orders",product,{responseType:'text' as 'json'});
   }
 
}
