import { BackofficeModule } from '../backoffice/backoffice.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    BackofficeModule.forRoot(),
  ],
  declarations: [PagesComponent],
})
export class PagesModule { }
