import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { ProgressbarModule } from './layout/components/progressbar/progressbar.module';
import { Layout1Module } from './layout/layout1/layout1.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,

    SharedModule,
    ProgressbarModule,
    Layout1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
