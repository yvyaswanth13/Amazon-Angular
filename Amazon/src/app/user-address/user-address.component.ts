import { Component, OnInit } from '@angular/core';
import { Address } from '../Address';
import { OrderAPIService } from '../order-api.service';

@Component({
  selector: 'app-user-address',
  templateUrl: './user-address.component.html',
  styleUrls: ['./user-address.component.css']
})
export class UserAddressComponent implements OnInit {


  public myaddress: Address={
    addressLine1: "" ,
        addressLine2: "",
        city :  "" ,
        postalCode :  "" ,
        country :  "" ,
        mobile :  "" ,
        mailId :  "" ,
        contactPerson :  ""
      };
  message: Object | undefined;
  
  constructor(private ser:OrderAPIService) { }
  public goToOrders(){

    console.log("OKKK");
    let resp=this.ser.addAddress(this.myaddress);
    resp.subscribe((data)=>this.message=data);
  }
 

  ngOnInit(): void {
  }

}
