import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';

import { UserDetails } from './user-details.model';

import { UserDetailsState, UserDetailsStore } from './user-details.store';

@Injectable({providedIn: 'root'})
export class UserDetailsQuery extends QueryEntity<UserDetailsState, UserDetails>{

  constructor(protected store: UserDetailsStore) {
    super(store);
  }

}
