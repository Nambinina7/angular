import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DataListComponent} from "./data-list/data-list.component";

const routes: Routes = [
  {
    path: 'tutorials',
    component: DataListComponent,
    data: { title: 'date List' }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
