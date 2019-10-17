import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';


import { UserDetails } from './user-details.model';

export interface UserDetailsState extends EntityState<UserDetails> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'userDetails', idKey: 'code' })
export class UserDetailsStore extends EntityStore<UserDetailsState, UserDetails> {
  constructor() {
    super();
  }
}
