import { DataService } from './../data.service';
import { Observable } from 'rxjs/Observable';
import { Package } from './../models/package';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  private packages$: Observable<Package[]>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.packages$ = this.dataService.getPackages$();

    // We dont need a suscribe when we use async pipe
    this.packages$.subscribe((data) => {
      console.log('getting', data);
    });
  }

}
