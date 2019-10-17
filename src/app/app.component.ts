import { Component } from '@angular/core';
//import {FilterService} from './filter/filter.service';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';

  constructor(
    //private filterService: FilterService
    ) {

  }

  ngOnInit() {
   // this.filterService.getFilterData().subscribe(data => console.log(data));
  }
}
