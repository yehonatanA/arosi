import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pages',
  template: '<div dir="rtl"><router-outlet></router-outlet></div>',
  styleUrls: ['./pages.component.scss']
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
