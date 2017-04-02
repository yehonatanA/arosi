import { Component, OnInit } from '@angular/core';
import { MenuService } from '../top/menu/menu.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {

  constructor(private menuService: MenuService) { }

  
  public get selectedMenuItem() : string {
    return this.menuService.selectedMenuItem;
  }
  

  ngOnInit() {
  }

}
