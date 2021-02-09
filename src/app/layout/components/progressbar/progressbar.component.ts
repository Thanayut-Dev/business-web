import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ProgressbarService } from './progressbar.service';

@Component({
  selector: 'app-progressbar',
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss']
})
export class ProgressbarComponent implements OnInit, OnDestroy {

  bufferValue: number;
  mode: 'determinate' | 'indeterminate' | 'buffer' | 'query';
  value: number;
  visible: boolean;

  // Private
  private _unsubscribeAll: Subject<any>;

  constructor(
    private _progressBarService: ProgressbarService
  ) {
    // Set the defaults

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  ngOnDestroy(): void {

    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();

  }

  ngOnInit(): void {

    // Subscribe to the progress bar service properties

    // Buffer value
    this._progressBarService.bufferValue
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((bufferValue) => {
        this.bufferValue = bufferValue;
      });

    // Mode
    this._progressBarService.mode
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((mode) => {
        this.mode = mode;
      });

    // Value
    this._progressBarService.value
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((value) => {
        this.value = value;
      });

    // Visible
    this._progressBarService.visible
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((visible) => {
        this.visible = visible;
      });

  }

}
