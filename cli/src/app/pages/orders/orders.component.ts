import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

 Orders :Order[];
  constructor() { 
      this.Orders = [];
  }

  ngOnInit() {
    this.Orders.push({ OrderNo: '1000', DateOrder: '05/04/17', CustomerName: 'שמעון פחימה',City: 'רמת-גן',Delivery: 'כן',Quantity:'100',Amount: 2500});
    this.Orders.push({ OrderNo: '1001', DateOrder: '12/04/17', CustomerName: 'איציק ואהובה נגר',City: 'יהוד' ,Delivery: 'כן',Quantity:'80',Amount: 2000});
    this.Orders.push({ OrderNo: '1002', DateOrder: '24/04/17', CustomerName: 'שלומי שבתאי',City: 'כפר-סבא', Delivery: 'כן',Quantity:'150',Amount: 3750});
    this.Orders.push({ OrderNo: '1003', DateOrder: '25/04/17', CustomerName: 'שאולי שמשון',City: 'חדרה', Delivery: 'כן',Quantity:'60',Amount: 1200});


  }

}
export interface Order {
    
    OrderNo;
    DateOrder;
    CustomerName;
    City;
    Delivery;
    Quantity;
    Amount;

    
}