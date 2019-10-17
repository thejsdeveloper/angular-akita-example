import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Condition } from './condition.model';
import { ConditionState, ConditionStore } from './condition.store';

@Injectable({providedIn: 'root'})
export class ConditionQuery extends QueryEntity<ConditionState, Condition>{

  constructor(protected store: ConditionStore) {
    super(store);
  }

}
