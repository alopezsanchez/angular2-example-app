import { Package } from './../models/package';
import { Observable } from 'rxjs/Observable';
import { DataService } from './../data.service';
import { Type } from './../models/type';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-packages',
  templateUrl: './packages.component.html',
  styleUrls: ['./packages.component.css']
})
export class PackagesComponent implements OnInit {

  registeredPackages$: Observable<Package[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
  }

}
