import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-ware-house',
  templateUrl: './ware-house.component.html',
  styleUrls: ['./ware-house.component.scss']
})
export class WareHouseComponent implements OnInit {
 Tools: Tool[];

    


  constructor() { 
    this.Tools = [];
  }

  ngOnInit() {
    
    this.Tools.push({ Id: '3000', Name: 'קומקום', Quantity: 40,});
    this.Tools.push({ Id: '3001', Name: 'קלחת', Quantity: 18,});
    this.Tools.push({ Id: '3002', Name: 'מגש', Quantity: 25,});
    this.Tools.push({ Id: '3003', Name: 'מצקת', Quantity: 15,});
    this.Tools.push({ Id: '3005', Name: 'מלקחיים', Quantity: 30,});
    this.Tools.push({ Id: '3006', Name: 'טרמופורטים', Quantity: 10,});
    this.Tools.push({ Id: '3007', Name: 'כפפות', Quantity: 12,});
  }

}


export class Tool {
    Id ;
    Name: String;
    Quantity: Number;
    
}