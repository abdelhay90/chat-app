import { Component, OnInit } from '@angular/core';
import { User } from '../../model/user';
import { UsersService } from '../../services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users: User[];
  constructor(private usersService: UsersService) {}

  ngOnInit() {
    this.usersService
      .getAll()
      .subscribe((data: User[]) => (this.users = data));
  }
}
