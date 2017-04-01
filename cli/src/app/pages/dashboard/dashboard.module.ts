import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DropdownModule } from 'primeng/primeng';
import { DataTableModule, SharedModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DropdownModule,
    DataTableModule, SharedModule
  ],
  declarations: [DashboardComponent],
  exports: [DropdownModule, DataTableModule, SharedModule]
})
export class DashboardModule { }
