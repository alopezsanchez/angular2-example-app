import { Type } from './models/type';
import { Package } from './models/package';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  public publicPackages: any[] = [
    { id: 1, text: 'NPM', type: 2 },
    { id: 2, text: 'Bower', type: 2 },
    { id: 3, text: 'GitHub private repository', type: 1 }
  ];

  public scopeTypes: any[] = [
    { id: 1, text: 'Private' },
    { id: 2, text: 'Public' }
  ];

  /**
   * packages database
   */
  private packages: Package[] = [];

  /** Event emitter */
  private packages$: BehaviorSubject<Package[]> = new BehaviorSubject<Package[]>([]);

  constructor() { }

  getNewPackage(): Package {
    return new Package(
      new Date(),
      '',
      this.scopeTypes[0].id,
      this.publicPackages[0].id,
      false
    );
  }

  getPublicPackagesByType(type): Type[] {
    return this.publicPackages.filter(c => c.type === type);
  }

  postPackage(newPackage: Package) {
    const packageClone: Package = Object.assign({}, newPackage);
    this.packages.push(packageClone);
    console.log('push' + JSON.stringify(this.packages));
    this.packages$.next(this.packages);
  }

  getPackages$(): Observable<Package[]> {
    return this.packages$.asObservable();
  }

}
