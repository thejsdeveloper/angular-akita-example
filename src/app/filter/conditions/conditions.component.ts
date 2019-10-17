import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FilterService } from '../../filter/filter.service';

import { Condition } from './state/condition.model';
import { ConditionQuery } from './state/condition.query';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {
  condition$: Observable<Condition[]>;
  
  constructor(
    private filterService: FilterService,
    private conditionQuery: ConditionQuery
  ) { }

  ngOnInit() {
    this.condition$ = this.conditionQuery.selectAll().pipe(tap(data => console.log('conditions', data)))
    this.filterService.getFilterConditions();
  }

}