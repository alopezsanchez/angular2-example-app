import { PackagesRoutingModule } from './packages-routing.module';
import { MaterialModule } from '@angular/material';
import { DataService } from './data.service';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewComponent } from './new/new.component';
import { PackagesComponent } from './packages/packages.component';
import { ListComponent } from './list/list.component';
import { RegisteredComponent } from './registered/registered.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    PackagesRoutingModule,
  ],
  declarations: [
    NewComponent,
    PackagesComponent,
    ListComponent,
    RegisteredComponent
  ],
  exports: [
    PackagesComponent
  ],
  providers: [ // registro del servicio de datos como un proveedor inyectable
    DataService
  ]
})
export class PackagesModule { }
