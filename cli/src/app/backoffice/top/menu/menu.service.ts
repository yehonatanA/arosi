import { Router, Routes } from '@angular/router';
import { BehaviorSubject } from 'rxjs/Rx';
import { Injectable, OnDestroy } from '@angular/core';

@Injectable()
export class MenuService implements OnDestroy {
  private alive: boolean = true;

  constructor(router: Router) {
    router.events.subscribe((val) => this.selectedMenuItem = this.calcCurrent());
  }

  public menuItems: any[] = [
    { label: 'ראשי', url: '/pages/dashboard', icon: 'fa-home' },
    { label: 'הזמנות', url: '/pages/Orders', icon: 'fa-first-order' },
    { label: 'טופס מרק תימני', url: '/pages/yemen', icon: 'fa-bookmark' },
    { label: 'טופס אוכל יבש ', url: '/pages/dry', icon: 'fa-cutlery' },
    { label: 'דוחות וסטטיקסטיקות', url: '/pages/statistics-reports', icon: 'fa-area-chart' },
    { label: 'כלים וציוד', url: '/pages/warehouse', icon: 'fa-superpowers' },
    { label: 'הגדרות', url: '/pages/settings', icon: 'fa-cog' }
  ];


  private _selectedMenuItem: any = this.calcCurrent();
  public get selectedMenuItem(): any {
    return this._selectedMenuItem;
  }
  public set selectedMenuItem(v: any) {
    this._selectedMenuItem = v;
  }


  private calcCurrent(): any {
    return this.menuItems.find(x => window.location.href.indexOf(x.url) >= 0) || this.selectedMenuItem || this.menuItems[0];
  }


  ngOnDestroy(): void {
    this.alive = false;
  }
}
