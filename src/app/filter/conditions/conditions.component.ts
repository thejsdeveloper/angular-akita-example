import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';

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
  conditionForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private filterService: FilterService,
    private conditionQuery: ConditionQuery
  ) { }

  ngOnInit() {
    this.condition$ = this.conditionQuery.selectAll().pipe(tap(data => {
      console.log('conditions', data);
      //this.conditionForm.get('conditions').         
    }))
    this.filterService.getFilterConditions();


    this.conditionForm = this.fb.group({
      conditions: this.fb.array([])
    })
  }

  setActive(checked: boolean, id: string ) {
   checked ?
     this.filterService.setActiveContions(id) : this.filterService.removeActiveContions(id)

  }

}