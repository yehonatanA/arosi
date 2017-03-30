import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { TopComponent } from './top/top.component';
import { NavbarComponent } from './top/navbar/navbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, BreadcrumbsComponent, TopComponent],
  exports: [NavbarComponent, BreadcrumbsComponent, TopComponent]
})
export class BackofficeModule { }
