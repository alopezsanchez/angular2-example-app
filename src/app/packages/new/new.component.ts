import { Package } from './../models/package';
import { Type } from './../models/type';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  private publicPackages: any[]  = [];

  private categories: Type[] = [];

  private scopeTypes: Type[];

  private package: Package;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.publicPackages = this.dataService.publicPackages;
    this.scopeTypes = this.dataService.scopeTypes;
    this.package = this.dataService.getNewPackage();
    this.onChangeType();
  }

  onChangeType() {
    this.categories = this.dataService.getPublicPackagesByType(this.package.type);
    this.package.category = this.categories[0].id;
  }

  onSavePackage() {
    const clone = Object.assign({}, this.package);
    this.dataService.postPackage(clone);
  }

}
