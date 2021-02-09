import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-layout1',
  templateUrl: './layout1.component.html',
  styleUrls: ['./layout1.component.scss']
})
export class Layout1Component implements OnInit, OnDestroy {

  isAuthenticated: boolean = true;
  // Private
  private _unsubscribeAll: Subject<any>;

  constructor() {
    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }
  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  ngOnInit(): void {
  }

}
