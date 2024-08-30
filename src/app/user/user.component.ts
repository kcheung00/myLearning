import { Component, computed, input, signal } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];
  avator = input.required<string>();
  name = input.required<string>();
  imagePath = computed( () => 'assets/users/' + this.avator());

  // Opt_1: The following 4 lines are used to demo random info on button click
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed( () => 'assets/users/' + this.selectedUser().avatar);
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  onSelectUser(){
    console.log("Click a button !!");
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    
    // Opt_1
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
