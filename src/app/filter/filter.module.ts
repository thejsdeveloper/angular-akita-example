import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { ConditionsComponent } from "./conditions/conditions.component";
import { UserDetailsComponent } from "./user-details/user-details.component";
import { FilterService } from "./filter.service";
import { FilterDataService } from "./filter-data.service";

import { ReactiveFormsModule } from '@angular/forms';
import { FilterComponent } from './filter.component';


const routes: Routes = [ {
  path: '', component: FilterComponent
}];

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule,
    RouterModule.forChild(routes)
    ],
  declarations: [ConditionsComponent, UserDetailsComponent, FilterComponent],
  providers: [FilterService, FilterDataService],
  exports: [ConditionsComponent, UserDetailsComponent]
})
export class FilterModule {}
