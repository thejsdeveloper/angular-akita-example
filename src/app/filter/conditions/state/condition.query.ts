import { Injectable } from '@angular/core';
import { QueryEntity, EntityUIQuery } from '@datorama/akita';

import { Condition , ConditionUI} from './condition.model';
import { ConditionState, ConditionStore, ConditionUIState } from './condition.store';
import { tap, map , mergeMap, distinct, distinctUntilChanged } from 'rxjs/operators';
import {from} from 'rxjs';

@Injectable({providedIn: 'root'})
export class ConditionQuery extends QueryEntity<ConditionState, Condition>{

  ui: EntityUIQuery<ConditionUIState, ConditionUI>;

  constructor(protected store: ConditionStore) {
    super(store);
    this.createUIQuery();
  }


  getActiveUserDetails() {
    return this.selectActive((active: Condition) => active.userDetails)
            .pipe(
              map(values => Array.from(new Set(values.flat())))
            );
  }

}
