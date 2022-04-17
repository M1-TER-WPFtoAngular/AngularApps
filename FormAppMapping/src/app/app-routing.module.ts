import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Window1Component } from './window1/window1.component';
const routes: Routes = [
  { path: 'window1', component: Window1Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
