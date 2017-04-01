import { MenuService } from './top/menu/menu.service';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { TopComponent } from './top/top.component';
import { NavbarComponent } from './top/navbar/navbar.component';
import { MenuComponent } from './top/menu/menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarComponent, BreadcrumbsComponent, TopComponent, MenuComponent],
  exports: [NavbarComponent, BreadcrumbsComponent, TopComponent, MenuComponent],
  providers: [MenuService]
})
export class BackofficeModule { 
      static forRoot():ModuleWithProviders {
        return {
            ngModule: BackofficeModule,
            providers: [MenuService]
        };
    }
}
