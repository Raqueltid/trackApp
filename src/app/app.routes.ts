import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './contracts/home/home.component';
import { GeoListComponent } from './contracts/geo-list/geo-list.component';

// The order is important. From Most specific to less
const routes: Routes = [
  { path: '', redirectTo: 'home/geo-list', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, children: [
    {path: 'geo-list', component: GeoListComponent}]
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
