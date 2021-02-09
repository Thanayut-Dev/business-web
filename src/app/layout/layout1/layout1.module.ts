import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutModule } from '@angular/cdk/layout';
import { Layout1Component } from './layout1.component';
import { SharedModule } from '../../shared/shared.module';
import { ProgressbarModule } from '../components/progressbar/progressbar.module';
import { ToolbarModule } from '../components/toolbar/toolbar.module';



@NgModule({
  declarations: [Layout1Component],
  imports: [
    LayoutModule,

    SharedModule,

    ProgressbarModule,
    ToolbarModule,
  ],
  exports: [Layout1Component]
})
export class Layout1Module { }
