import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FilterService } from '../../filter/filter.service';

import { ConditionState, ConditionStore } from './state/condition.store';
import { ConditionQuery } from './state/condition.query';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.css']
})
export class ConditionsComponent implements OnInit {

  constructor(
    private filterService: FilterService,
    private conditionQuery: ConditionQuery
  ) { }

  ngOnInit() {

    this.filterService.getFilterConditions();
  }

}