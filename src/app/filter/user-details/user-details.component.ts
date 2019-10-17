import { Component, OnInit } from '@angular/core';
import { UserDetailsQuery } from './state/user-details.query';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private userDetailsQuery: UserDetailsQuery) { }

  ngOnInit() {

    this.userDetailsQuery.getUserDetails().subscribe(data => console.log('userDetails -->', data));
  }

}