import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { trigger, state, style, transition, animate } from '@angular/animations';

import { UserDetailsQuery } from "./state/user-details.query";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { UserDetails } from "./state/user-details.model";

@Component({
  selector: "app-user-details",
  templateUrl: "./user-details.component.html",
  styleUrls: ["./user-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [trigger("fadeInOut", [
    state('void', style({
      opacity: 0
    })),
    transition('void<=> *', animate(1000))
  ])]
})
export class UserDetailsComponent implements OnInit {
  userDetails$: Observable<UserDetails[]>;
  constructor(private userDetailsQuery: UserDetailsQuery) {}

  ngOnInit() {
    this.userDetails$ = this.userDetailsQuery
      .getUserDetails()
      .pipe(tap(data => console.log("userDetails -->", data)));
  }
}
