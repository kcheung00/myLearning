import { Component, EventEmitter, Input, Output } from '@angular/core';
// import { DUMMY_USERS } from './dummy-users';
import { User } from './user.model';
import { CardComponent } from "../shared/card/card.component";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // Create object type user. Not an object, just object type
  @Input({required: true}) objTy_User!:User;
  @Input({required: true}) selected_User!: boolean;
  @Output() select = new EventEmitter<string>();

  get imagePath() {
    return 'assets/users/' + this.objTy_User.avatar;
  }

  onSelectUser(){
    console.log("Click a button !!");
    this.select.emit(this.objTy_User.id);
  }
}
