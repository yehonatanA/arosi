import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: ' <router-outlet></router-outlet>',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
