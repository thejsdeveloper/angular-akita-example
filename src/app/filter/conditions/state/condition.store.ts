import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig, MultiActiveState, EntityUIStore } from '@datorama/akita';


import { Condition, ConditionUI } from './condition.model';

export interface ConditionState extends EntityState<Condition>,  MultiActiveState {}
export interface ConditionUIState extends EntityState<ConditionUI> {}
const initialState = {
  active: []
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'conditions', idKey: 'code' })
export class ConditionStore extends EntityStore<ConditionState, Condition> {
  ui: EntityUIStore<ConditionUIState, ConditionUI>;

  constructor() {
    super(initialState);
    this.createUIStore({}, {  resettable: true });
  }
}
