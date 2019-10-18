import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable, combineLatest } from "rxjs";
import { filter, map, tap } from "rxjs/operators";

import { FilterService } from "../../filter/filter.service";
import { Condition } from "./state/condition.model";
import { ConditionQuery } from "./state/condition.query";

@Component({
  selector: "app-conditions",
  templateUrl: "./conditions.component.html",
  styleUrls: ["./conditions.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConditionsComponent implements OnInit {
  condition$: Observable<Condition[]>;

  constructor(
    private filterService: FilterService,
    private conditionQuery: ConditionQuery
  ) {}

  ngOnInit() {
    this.condition$ = this.conditionQuery.selectAll();
    this.filterService.getFilterConditions();
    this.updateUIStore();
  }

  setActive(id: string, selected: boolean) {
    this.filterService.toggleActiveState(id);
  }

  updateUIStore() {
 
    combineLatest(
      this.conditionQuery.getActiveUserDetails()
        .pipe(filter((data: string[]) => !!data.length)),

      this.conditionQuery.ui
        .selectAll()
        .pipe(map((data: string[]) => data.flat()))
    ).subscribe(
      ([activeUserDetails, storedUserDetails]: [string[], string[]]) => {

        if (activeUserDetails.length !== storedUserDetails.length) {
          
          this.filterService.updateUIStore(activeUserDetails);

        } else if(this.filterService.isDifferent(activeUserDetails, storedUserDetails)){
            this.filterService.updateUIStore(activeUserDetails);
        }
      }
    );
  }
}
