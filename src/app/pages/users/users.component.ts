import { Component } from '@angular/core';
import { User } from 'src/app/models/user';

@Component({
  selector: 'atomic-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  users: User[];

  eventHandler(event: User[]){
    this.users = event;
    console.log(this.users);
  }
}
