import { Package } from './../models/package';
import { MdInputContainer } from '@angular/material';
import {Input, Component,  OnInit} from '@angular/core';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

  @Input() registeredPackages: Package[];

  constructor() { }

  ngOnInit() {
  }

}
