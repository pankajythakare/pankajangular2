import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { DatatableComponent } from './datatable.component';
import { ColumnComponent } from './column.componenet';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgxDtComponent } from './ngxdt.component';

@NgModule({
  declarations: [AppComponent, DatatableComponent, ColumnComponent, NgxDtComponent],
  imports: [
    BrowserModule, HttpModule, NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
