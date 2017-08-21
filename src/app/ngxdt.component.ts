import { Component } from '@angular/core';

@Component({
    selector: 'ngx-dt',
    template: `
    <div>
      <ngx-datatable
        [rows]="rows"
        [columnMode]="'standard'"
        [loadingIndicator]=true
        [externalPaging]=false
        [limit]="2"
        [count]="count"
        [messages]="messages"
        [footerHeight]="30"
        [columns]="columns">
      </ngx-datatable>
    </div>
  `
})
export class NgxDtComponent {
    messages = {
        // Message to show when array is presented
        // but contains no values
        emptyMessage: 'No data to display',

        // Footer total message
        totalMessage: 'total'
    };
    rows = [
        { name: 'Austin', gender: 'Male', company: 'Swimlane' },
        { name: 'Dany', gender: 'Male', company: 'KFC' },
        { name: 'Molly', gender: 'Female', company: 'Burger King' },
    ];
    columns = [
        { prop: 'name', sortable: true },
        { name: 'Gender', sortable: false },
        { name: 'Company' }
    ];
    count = 3;
}