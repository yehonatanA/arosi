import { Component, OnInit, NgModule } from '@angular/core';
import { SelectItem } from 'primeng/primeng';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cities: SelectItem[];
  selectedCity: any;
  Orders :Order[];
  OrderView :OrderView[];
  NewOrderView :OrderView;
  Tools: Tool[];
  IsDeliverychecked: boolean;
  selectedExtras: string[];
  Extras: SelectItem[];


  constructor() { 
    this.cities = [];
    this.Orders = [];
    this.Tools = [];
    this.Extras = [];
    
    this.IsDeliverychecked = false;
    this.NewOrderView =  new OrderView();
     this.NewOrderView.City="מודעין";
     this.NewOrderView.Adress="התאנים 45";
     this.NewOrderView.PriceOfUnit=25;
  }

  ngOnInit() {
    this.cities.push({ label: 'Select City', value: null });
    this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
    this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
    this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
    this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
    this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });

  
    this.Orders.push({ OrderNo: '1000', DateOrder: '05/04/17', CustomerName: 'שימי הצב',City: 'רמת-גן',Delivery: 'כן',Quantity:'100',Amount: 2500});
    this.Orders.push({ OrderNo: '1001', DateOrder: '12/04/17', CustomerName: 'איציק ואהובה',City: 'יהוד' ,Delivery: 'כן',Quantity:'80',Amount: 2000});
    this.Orders.push({ OrderNo: '1002', DateOrder: '24/04/17', CustomerName: 'שלומי שבתאי',City: 'כפר-סבא', Delivery: 'כן',Quantity:'150',Amount: 3750});


    this.Tools.push({ Id: '3000', Name: 'קומקום', Quantity: 40,});
    this.Tools.push({ Id: '3001', Name: 'קלחת', Quantity: 18,});
    this.Tools.push({ Id: '3002', Name: 'מגש', Quantity: 25,});
    this.Tools.push({ Id: '3003', Name: 'מצקת', Quantity: 15,});
    this.Tools.push({ Id: '3005', Name: 'מלקחיים', Quantity: 30,});
    this.Tools.push({ Id: '3006', Name: 'טרמופורטים', Quantity: 10,});
    this.Tools.push({ Id: '3007', Name: 'כפפות', Quantity: 12,});
    
        this.Extras.push({label:'sd', value:'ds'});
        this.Extras.push({label:'Rome', value:'Rome'});
        this.Extras.push({label:'London', value:'London'});
        this.Extras.push({label:'Istanbul', value:'Istanbul'});
        this.Extras.push({label:'Paris', value:'Paris'});
    
 /*   this.OrderView.push({
       OrderNo: '1002', 
       CreateDate: '24/04/17', 
       DateOrder: '24/04/17', 
       CustomerName: 'שלומי שבתאי',
       City: 'כפר-סבא', 
       Adress: 'ויצמן 135',
       PhoneNo: '054-7584255',
       Hour:'11:30',
       Type:'ברית',
       Quantity:'150',
       PriceOfUnit:'25',
       Delivery: true,
       ShippingPrice: '250',
       
       DriverName:'150',
 
      });*/
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

export class OrderView {
    OrderNo ;
    CreateDate: Date; // תאריך יצירה
    DateOrder: Date; // תאריך הזמנה
    CustomerName: String;
    City: String;
    Adress: String;
    PhoneNo;
    Hour; // לשעה
    Type; // סוג האירוע
    Quantity: Number  ; //כמות מנות
    PriceOfUnit;    //מחיר למנה
    MainCourse :Food[]; //סוגי עיקריות
    Extras :Food[]; //תוספות חמות 
    Salads :Food[]; //סוגי סלטים
    Pastries:Food[];// גלוב לחוח וסלוף
    Tools : Tool[]; //כלים וציוד
    DriverName: String; //נהג
    Delivery: Boolean; // הובלה
    ShippingPrice: ShippingPrice; // מחיר הובלה
    TotalAmount: Number; //  סה"כ
    UserId; 
    Comments;

}

export class Tool {
    Id ;
    Name: String;
    Quantity: Number;
    
}


export class Food {
    Id ;
    Category:String;
    Name: String;
    Quantity: Number;
}


export class ShippingPrice
 {
    Id ;
    NameCity: String;
    Price: Number;
    Distance: Number;
    Area;

}

