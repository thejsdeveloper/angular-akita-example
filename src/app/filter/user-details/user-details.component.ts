import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import {
  trigger,
  state,
  style,
  transition,
  animate,
  query,
  stagger
} from "@angular/animations";
import { AkitaNgFormsManager } from "@datorama/akita-ng-forms-manager";

import { UserDetailsQuery } from "./state/user-details.query";
import { Observable } from "rxjs";
import { tap, take } from "rxjs/operators";
import { UserDetails } from "./state/user-details.model";
import { FilterService } from "../filter.service";
import { FormGroup, FormControl, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger("fadeInOut", [
      state(
        "void",
        style({
          opacity: 0
        })
      ),
      transition("* <=> *", [
        animate(500),
        query(
          ":enter",
          [
            style({ opacity: 0 }),
            stagger(100, [animate("1s", style({ opacity: 1 }))])
          ],
          { optional: true }
        )
      ])
    ])
  ]
})
export class UserDetailsComponent implements OnInit {
  userDetails$: Observable<UserDetails[]>;

  form: FormGroup;

  constructor(
    private userDetailsQuery: UserDetailsQuery,
    private fb: FormBuilder,
    private formsManager: AkitaNgFormsManager<any>,
    private filterService: FilterService
  ) {
    this.form = this.fb.group({});
  }

  ngOnInit() {
    this.userDetails$ = this.userDetailsQuery.getUserDetails().pipe(
      tap((data: UserDetails[]) => {
        console.log("userDetails -->", data);
        this.buildForm(data)
      })
    );
  }

  ngOnDestroy() {
    this.formsManager.unsubscribe();
  }



  buildForm(userDetails: UserDetails[]) {
    
    userDetails.forEach(detail => {
      this.form.addControl(detail.code, new FormControl(''));
    });
    this.formsManager.upsert('requiredDetails', this.form);
    this.updateForm(userDetails);
    
  }


  updateForm(userDetails: UserDetails) {
    const keys = Object.keys(this.form.controls);
    const detailsKeys = userDetails.map(data => data.code);

    let differentKeys = this.filterService.difference(keys, detailsKeys );
    console.log('--->', differentKeys)
    differentKeys.forEach(key => this.form.removeControl(key));
    console.log(this.form)

  }

}
