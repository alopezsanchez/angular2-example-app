import { ListComponent } from './list/list.component';
import { NewComponent } from './new/new.component';
import { PackagesComponent } from './packages/packages.component';
import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: 'packages',
    component: PackagesComponent,
    children: [
      {
        path: 'new',
        component: NewComponent
      },
      {
        path: 'list',
        component: ListComponent
      }
    ]
  },
  /*{
    path: 'packages/:id',
    component: EditorComponent
  }*/
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PackagesRoutingModule { }
