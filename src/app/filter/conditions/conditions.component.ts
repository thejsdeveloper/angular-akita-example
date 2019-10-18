import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable, combineLatest } from "rxjs";
import { combineQueries } from '@datorama/akita';
import { filter, map, tap } from "rxjs/operators";
import { untilDestroyed } from 'ngx-take-until-destroy';
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

  ngOnDestroy() {
    this.filterService.reset();
  }

  setActive(id: string) {
    this.filterService.toggleActiveState(id);
  }

  updateUIStore() {
 
    // this.conditionQuery.getActiveUserDetails()
    //     .pipe(filter((data: string[]) => !!data.length)).subscribe(
    //       activeUserDetails => this.filterService.updateUIStore(activeUserDetails)
    //     )


    combineLatest(
      this.conditionQuery.getActiveUserDetails()
        .pipe(filter((data: string[]) => !!data.length)),

      this.conditionQuery.ui.selectAll().pipe(map((data: string[]) => data.flat()))

    ).pipe(untilDestroyed(this)).subscribe(
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
