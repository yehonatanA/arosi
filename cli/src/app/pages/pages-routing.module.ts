import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WareHouseComponent } from './ware-house/ware-house.component';

const routes: Routes = [
    {
    path: '',
    component: PagesComponent,
    // canActivate: [LoggedInGuardService],
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent  },
      { path: 'warehouse', component: WareHouseComponent  },
    ]
  }

];

export const routing = RouterModule.forChild(routes);
