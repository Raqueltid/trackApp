import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


// The order is important. From Most specific to less
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
