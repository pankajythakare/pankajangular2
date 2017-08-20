import {Http, Response} from '@angular/http';
import {Injectable, Component, Input} from '@angular/core';
import {ColumnComponent} from './column.componenet';
 
@Component({
  selector: 'datatable',
  template: `<table class="table">
               <thead>
                 <tr>
                   <th *ngFor="let column of columns">{{column.header}}</th>
                 </tr>
               </thead>
	       <tbody *ngFor="let row of dataset">
	  	 <tr>
	  	   <td *ngFor="let column of columns">{{row[column.value]}}</td>
	         </tr>
	       </tbody>
  	     </table>
  `
})
export class DatatableComponent { 
 
  @Input() dataset;
  columns: ColumnComponent[] = [];
 
  addColumn(column){
    this.columns.push(column);
  }
}