import { NgModule } from '@angular/core';
import {  } from '@angular/common';
import { ProgressbarComponent } from './progressbar.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [ProgressbarComponent],
  imports: [
    SharedModule
  ],
  exports: [ProgressbarComponent]
})
export class ProgressbarModule { }
