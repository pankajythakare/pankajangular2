import { Http, Response } from '@angular/http';
import { Injectable, Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
    <label>Using Datatable & bootstrap</label>
    <datatable [dataset]=cities>
                  <column [value]="'id'" [header]="'Id'"></column>
                  <column [value]="'city'" [header]="'City'"></column>
                  <column [value]="'country'" [header]="'Country'"></column>
             </datatable>
            <br/>
    <label>Using NGX-Datatable from swimlane</label>
             <ngx-dt></ngx-dt>
             `,

})
export class AppComponent {
    cities;
    constructor(private http: Http) {
        //     this.http.get('./data/cities.json')
        //             .subscribe(res => this.cities = res.json());
        this.cities = [{ "id": 1, "city": "Berlin", "country": "Germany" },
        { "id": 2, "city": "Amsterdam", "country": "Netherlands" },
        { "id": 3, "city": "Paris", "country": "France" }
        ];

    }
}