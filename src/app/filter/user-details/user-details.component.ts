import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { trigger, state, style, transition, animate, query, stagger } from '@angular/animations';

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
    transition('* <=> *', [
      animate(500),
      query(':enter', [
          style({ opacity: 0 }),
          stagger(100, [
            animate('1s', style({ opacity: 1 }))
          ])
        ], { optional: true })
    ])
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
