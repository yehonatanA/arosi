import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WareHouseComponent } from './ware-house/ware-house.component';
import { YemenFormComponent } from "app/pages/yemen-form/yemen-form.component";
import { YemenReservationComponent } from "app/pages/yemen-reservation/yemen-reservation.component";
import { DryFormComponent } from "app/pages/dry-form/dry-form.component";
import { DeyReservationComponent } from "app/pages/dey-reservation/dey-reservation.component";
import { StatisticsReportsComponent } from "app/pages/statistics-reports/statistics-reports.component";
import { OrdersComponent } from "app/pages/orders/orders.component";

const routes: Routes = [
    {
    path: '',
    component: PagesComponent,
    // canActivate: [LoggedInGuardService],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent  },
      { path: 'warehouse', component: WareHouseComponent  },
      { path: 'yemen', component: YemenFormComponent  },
      { path: 'yemen_reservation', component: YemenReservationComponent  },
      { path: 'dry', component: DryFormComponent  },
      { path: 'dry_reservation', component: DeyReservationComponent  },
      { path: 'Orders', component: OrdersComponent  },
      { path: 'statistics-reports', component: StatisticsReportsComponent  },
    ]
  }

];

export const routing = RouterModule.forChild(routes);
