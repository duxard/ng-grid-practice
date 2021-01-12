import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import { BasicGridOneComponent } from './components/basic-grid-one/basic-grid-one.component';
import { BasicGridTwoComponent } from './components/basic-grid-two/basic-grid-two.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicGridOneComponent,
    BasicGridTwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
