import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'pages', pathMatch: 'full' },
    { path: 'pages', loadChildren: 'app/pages/pages.module#PagesModule' },
    { path: '**', redirectTo: 'pages/dashboard', pathMatch: 'full' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
    providers: []
})
export class AppRoutingModule { }
