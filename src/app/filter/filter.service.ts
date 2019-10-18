import { Injectable } from "@angular/core";
import { FilterDataService } from "./filter-data.service";
import { ConditionStore } from "./conditions/state/condition.store";
import { UserDetailsStore } from "./user-details/state/user-details.store";

@Injectable()
export class FilterService {
  constructor(
    private filterDataService: FilterDataService,
    private conditionStore: ConditionStore,
    private userDetailsStore: UserDetailsStore
  ) {}

  getFilterConditions() {
    this.filterDataService.getFilterData().subscribe(data => {
      this.conditionStore.set(data.entities.providers);
      this.userDetailsStore.set(data.entities.userDetails);
    });
  }

  toggleActiveState(id: string) {
    this.conditionStore.toggleActive(id);
  }

  reset() {
    this.conditionStore.setActive([]);
    this.conditionStore.ui.reset();
  }

  updateUIStore(userDetails: string[]) {
    this.conditionStore.ui.set( {
      userDetails
    });
  }

  difference(a: string[], b: string[]) {
    const s = new Set(b);
    return a.filter(x => !s.has(x));
  }

  isDifferent(a: string[], b: string[]) {
    return !!this.difference(a, b).length;
  }
}
