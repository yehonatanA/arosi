import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BackofficeModule } from '../backoffice/backoffice.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { routing } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { WareHouseComponent } from './ware-house/ware-house.component';
import { RouterModule } from '@angular/router';
//>> --------  primeng  components -----
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { SharedModule } from 'primeng/components/common/shared';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { InputSwitchModule } from 'primeng/components/inputswitch/inputswitch';
import { MultiSelectModule } from 'primeng/components/multiSelect/multiSelect';
import { YemenFormComponent } from './yemen-form/yemen-form.component';
import { DryFormComponent } from './dry-form/dry-form.component';
import { OrdersComponent } from './orders/orders.component';
import { StatisticsReportsComponent } from './statistics-reports/statistics-reports.component';
import { DeyReservationComponent } from './dey-reservation/dey-reservation.component';
import { YemenReservationComponent } from './yemen-reservation/yemen-reservation.component';
//<< --------  primeng  components -----
const PRIMENG_COMPONENTS = [InputSwitchModule, MultiSelectModule,
  DropdownModule, DataTableModule, SharedModule];
@NgModule({
  imports: [
    CommonModule, FormsModule,
    RouterModule,
    routing,
    BackofficeModule.forRoot(),
    ...PRIMENG_COMPONENTS
  ],
  declarations: [PagesComponent, DashboardComponent, WareHouseComponent, YemenFormComponent, DryFormComponent, OrdersComponent, StatisticsReportsComponent, DeyReservationComponent, YemenReservationComponent],
  exports: [DashboardComponent, WareHouseComponent,
    ...PRIMENG_COMPONENTS],
})
export class PagesModule { }
