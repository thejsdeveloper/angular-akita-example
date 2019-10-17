import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable, from } from 'rxjs';


import { FilterService } from '../../filter/filter.service';
import { Condition } from './state/condition.model';
import { ConditionQuery } from './state/condition.query';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConditionsComponent implements OnInit {
  condition$: Observable<Condition[]>;


  constructor(
    private filterService: FilterService,
    private conditionQuery: ConditionQuery
  ) { }

  ngOnInit() {
    this.condition$ = this.conditionQuery.selectAll();
    this.filterService.getFilterConditions();
  }

  setActive(id: string ) {
    this.filterService.toggleActiveState(id);
  }

}