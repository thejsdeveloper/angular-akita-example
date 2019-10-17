import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, MultiActiveState } from '@datorama/akita';


import { Condition } from './condition.model';

export interface ConditionState extends EntityState<Condition>,  MultiActiveState {}

const initialState = {
  active: []
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'conditions', idKey: 'code' })
export class ConditionStore extends EntityStore<ConditionState, Condition> {
  constructor() {
    super(initialState);
  }
}
