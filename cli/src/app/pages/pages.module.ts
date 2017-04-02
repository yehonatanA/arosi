import { DashboardComponent } from './dashboard/dashboard.component';
import { BackofficeModule } from '../backoffice/backoffice.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { WareHouseComponent } from './ware-house/ware-house.component';
import { RouterModule } from '@angular/router';
import { DropdownModule  } from 'primeng/components/dropdown/dropdown';
import { SharedModule } from 'primeng/components/common/shared';
import { DataTableModule  } from 'primeng/components/datatable/datatable';


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
