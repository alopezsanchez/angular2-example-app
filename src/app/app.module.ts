import { HomeModule } from './home/home.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { PackagesModule } from './packages/packages.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    HomeModule,
    MaterialModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    PackagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
