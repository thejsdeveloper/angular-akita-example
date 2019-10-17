import { Injectable } from "@angular/core";
import { FilterDataService } from './filter-data.service';
import { ConditionStore } from './conditions/state/condition.store';
import { UserDetailsStore } from './user-details/state/user-details.store';

@Injectable()
export class FilterService {

  constructor(
    private filterDataService: FilterDataService,
    private conditionStore: ConditionStore,
    private userDetailsStore: UserDetailsStore
    ) {}

  
  getFilterConditions() {
    this.filterDataService.getFilterData().subscribe(
      data => {
          console.log(data)
          this.conditionStore.set(data.entities.providers);
          this.userDetailsStore.set(data.entities.userDetails)
      })
    
  }



}
