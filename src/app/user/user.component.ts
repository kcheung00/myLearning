import { Component, computed, input, signal, output, Output, EventEmitter } from '@angular/core';
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
  id = input.required<string>();
  avator = input.required<string>();
  name = input.required<string>();
  imagePath = computed( () => 'assets/users/' + this.avator());

  // The following line is common use of event emitter
  // @Output() select = new EventEmitter();

  // The following line is the alternative of using output() function. This is NOT signal
  select = output<string>();

  // Opt_1: The following 4 lines are used to demo random info on button click
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed( () => 'assets/users/' + this.selectedUser().avatar);
  // get imagePath() {
  //   return 'assets/users/' + this.selectedUser.avatar
  // }

  onSelectUser(){
    console.log("Click a button !!");
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

    this.select.emit(this.id());
    
    // Opt_1
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
