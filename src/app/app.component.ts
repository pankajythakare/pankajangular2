import {Http, Response} from '@angular/http';
import {Injectable, Component } from '@angular/core';
 
@Component({
  selector: 'app-root',
  template: `<datatable [dataset]=cities>
                  <column [value]="'id'" [header]="'Id'"></column>
                  <column [value]="'city'" [header]="'City'"></column>
                  <column [value]="'country'" [header]="'Country'"></column>
             </datatable>
             `,
 
})
export class AppComponent { 
    cities;
    constructor(private http:Http) {
    //     this.http.get('./data/cities.json')
    //             .subscribe(res => this.cities = res.json());
        this.cities = [{"id":1,"city":"Berlin","country":"Germany"},
    {"id":2,"city":"Amsterdam","country":"Netherlands"},
{"id":3,"city":"Paris","country":"France"}
];
       
    }
}