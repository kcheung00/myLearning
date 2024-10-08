import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from "./user/user.component";
import { DUMMY_USERS } from './user/dummy-users';
import { TaskComponent } from "./task/task.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, UserComponent, TaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  users = DUMMY_USERS; // expose user to all components
  
  // selectedUserId = 'u1'; <--- this line is good. Learning
  selectedUserId?: string; // <--- this can be null

  // return selected user object
  get selectedUser(){
    return this.users.find( (user) => user.id === this.selectedUserId )!;
  }

  onSelectUser( id:string ){
    console.log("Selected user with ID : " + id);
    this.selectedUserId = id;
  }
}
