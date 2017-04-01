import { DashboardComponent } from './dashboard/dashboard.component';
import { BackofficeModule } from '../backoffice/backoffice.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { WareHouseComponent } from './ware-house/ware-house.component';
import { DropdownModule, DataTableModule, SharedModule } from 'primeng/primeng';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    routing,
    BackofficeModule.forRoot(),
    DropdownModule, DataTableModule, SharedModule
  ],
  declarations: [PagesComponent, DashboardComponent, WareHouseComponent],
  exports: [DashboardComponent, WareHouseComponent, 
            DropdownModule, DataTableModule, SharedModule],
})
export class PagesModule { }
