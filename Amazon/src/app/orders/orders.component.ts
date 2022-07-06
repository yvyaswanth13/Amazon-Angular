import { Component, OnInit } from '@angular/core';
import { OrderAPIService } from '../order-api.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: any;

  constructor(private service:OrderAPIService) { }
  

  ngOnInit(): void {
    let resp=this.service.getProducts();
    resp.subscribe((data)=>this.orders=data);
  
  }

}
