import { Router, Routes } from '@angular/router';
import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable } from '@angular/core';

@Injectable()
export class MenuService {

  public menuItems: any[] = [
    { label: 'ראשי', url: '/pages/dashboard', icon: 'fa-dashboard' },
    { label: 'הזמנות', url: '/pages/reservations', icon: 'fa-area-chart' },
    { label: 'מחסן', url: '/pages/warehouse', icon: 'fa-cogs' },
    { label: 'הגדרות', url: '/pages/settings', icon: 'fa-table' }
  ];

  
  private _selectedMenuItem : any = this.calcCurrent();
  public get selectedMenuItem() : any {
    return this._selectedMenuItem;
  }
  public set selectedMenuItem(v : any) {
    this._selectedMenuItem = v;
  }


  private calcCurrent(): any{
    return this.menuItems.find(x => window.location.href.indexOf(x.url) >= 0);
  }
  

}
