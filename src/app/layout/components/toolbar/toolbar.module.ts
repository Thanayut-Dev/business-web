import { NgModule } from '@angular/core';
import { } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { SharedModule } from '../../../shared/shared.module';



@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    SharedModule
  ],
  exports: [ToolbarComponent]
})
export class ToolbarModule { }
