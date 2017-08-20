import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }      from '@angular/http';
import { AppComponent } from './app.component';
import {DatatableComponent} from './datatable.component';
import {ColumnComponent} from './column.componenet';

@NgModule({  
  declarations: [ AppComponent,DatatableComponent, ColumnComponent],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
