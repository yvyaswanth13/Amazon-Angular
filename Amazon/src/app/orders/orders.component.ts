import { Component, OnInit } from '@angular/core';
import { OrderAPIService } from '../order-api.service';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any;
  flag_order:boolean=false;
  items: any;
  ditems:any
  constructor(private service:OrderAPIService,private serv:OrderServiceService) { }
  public deleteitem(id:number)
  {
    let resp=this.service.deleteItem(id);
    resp.subscribe((data)=>{
      this.ditems=data
      //console.log(data)
      this.ngOnInit();

    });
//this.serv.goToOrders();

  //this.flag_order=false;
  //this.flag_order=true;
    //DeleteOrderItems
  }
  public showOrders(){
    this.flag_order=true;
    console.log(this.orders)
  
}
flag_orderItems:boolean=false;
  
public goItems(id:number)
{ 
this.flag_orderItems=true;
  let resp1=this.service.getOItemsByID(id);
  resp1.subscribe((data)=>{this.items=data
    console.log(this.items)
  });
  // let resp2=this.service.getimages(this.items.productId);
  // resp2.subscribe((data)=>this.images=data);
 

}
  ngOnInit(): void {
  //  this.flag_order=true;
  
  let resp=this.service.getOrders();
  resp.subscribe((data)=>{
    this.orders=data
    console.log(data)
  });
   
    
  }

}
