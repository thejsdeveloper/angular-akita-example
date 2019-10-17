import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { Condition } from './condition.model';
import { ConditionState, ConditionStore } from './condition.store';
import { tap, map } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class ConditionQuery extends QueryEntity<ConditionState, Condition>{

  constructor(protected store: ConditionStore) {
    super(store);
  }


  getActiveUserDetails() {
    return this.selectActive((active: Condition) => active.userDetails)
            .pipe(
              map(values => Array.from(new Set(values.flat())))
            );
  }

}
