import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-yemen-form',
  templateUrl: './yemen-form.component.html',
  styleUrls: ['./yemen-form.component.scss']
})
export class YemenFormComponent implements OnInit {

   NewOrderView :OrderView;

  constructor() {
     //this.NewOrderView =  new OrderView();
    
   }

  ngOnInit() {

  }

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
    Group; // אוכל יבש , מרק תימני
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
    IsActive;Boolean;
    PaymentReceived; // התקבל תשלום
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

