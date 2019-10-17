import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { combineLatest } from 'rxjs';
import { map, auditTime, distinctUntilChanged, tap } from 'rxjs/operators';

import { UserDetails } from './user-details.model';
import { ConditionQuery } from '../../conditions/state/condition.query';

import { UserDetailsState, UserDetailsStore } from './user-details.store';

@Injectable({providedIn: 'root'})
export class UserDetailsQuery extends QueryEntity<UserDetailsState, UserDetails>{

  constructor(
    protected store: UserDetailsStore,
    private conditionQuery: ConditionQuery
    ) {
    super(store);
  }


  getUserDetails() {
    return combineLatest(
      this.selectAll(),
      this.conditionQuery.getActiveUserDetails()
    ).pipe(
      auditTime(0),
      map(([userDetails, detailsCode])=> {
          return userDetails.filter(detail => detailsCode.includes(detail.code))
      }),
      // tap( data => console.log(data)),
       distinctUntilChanged((prev: UserDetails, curr: UserDetails) => prev.code !== curr.code)
    )
  }

}
