import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DropdownModule } from 'primeng/primeng';

@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DropdownModule
  ],
  declarations: [DashboardComponent],
  exports: [DropdownModule]
})
export class DashboardModule { }
