import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DUMMY_USERS } from './dummy-users';

// const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // selectedUser = DUMMY_USERS[randomIndex];
  // selectedUser = signal(DUMMY_USERS[randomIndex]);
  // imagePath = computed( () => 'assets/users/' + this.selectedUser().avatar);
  @Input({required:true}) id!:string;
  @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(){
    console.log("Click a button !!");

    this.select.emit(this.id);
    // const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    // this.selectedUser=DUMMY_USERS[randomIndex];
    // this.selectedUser.set(DUMMY_USERS[randomIndex]);
  }
}
