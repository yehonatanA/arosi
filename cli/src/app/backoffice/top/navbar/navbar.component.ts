import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {

  constructor(private menuService: MenuService) {
  }

  public get menuItems(): any[] {
    return this.menuService.menuItems;
  }

  public get selectedMenuItem(): any[] {
    return this.menuService.selectedMenuItem;
  }

  ngOnInit() {
  }

  selected(item: any) {
    this.menuService.selectedMenuItem = item;
  }



}
