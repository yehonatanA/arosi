import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/primeng';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  cities: SelectItem[];
  selectedCity: string;
cars: Car[];
  constructor() { 
    this.cities = [];
    this.cars = [];
  }

  ngOnInit() {
    this.cities.push({ label: 'Select City', value: null });
    this.cities.push({ label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } });
    this.cities.push({ label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } });
    this.cities.push({ label: 'London', value: { id: 3, name: 'London', code: 'LDN' } });
    this.cities.push({ label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } });
    this.cities.push({ label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } });

    this.cars.push({ vin: 'Paris', year: 1999, brand: 'volvo', color: 'red'});
    this.cars.push({ vin: 'New-York', year: 2000, brand: 'toyota', color: 'blue'});
    this.cars.push({ vin: 'Jerusalem', year: 1999, brand: 'volvo', color: 'orange'});
  }

}

export interface Car {
    vin;
    year;
    brand;
    color;
}