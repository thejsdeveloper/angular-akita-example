import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ConditionsComponent } from "./conditions/conditions.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { FilterService } from "./filter.service";
import { FilterDataService } from "./filter-data.service";

@NgModule({
  imports: [CommonModule],
  declarations: [ConditionsComponent, UserDetailsComponent],
  providers: [FilterService, FilterDataService],
  exports: [ConditionsComponent, UserDetailsComponent]
})
export class FilterModule {}
