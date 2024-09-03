import { Component, Input } from '@angular/core';
import { ItemComponent } from "./item/item.component";
import { NewItemComponent } from "./new-item/new-item.component";
import { type NewItemData } from './new-item/new-item.model';
import { TaskService } from './task.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [ItemComponent, NewItemComponent],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input({required: true}) sel_uid!: string;
  @Input({required: true}) name!: string;

  isAddingItem = false;
  // Save next line for reference
  // private taskService: TaskService;

  // Dependency Injection: You don't instantiate an instance. Angular create it.
  // Then you can use this instance in any components on the same data.
  constructor(private taskService: TaskService){
    // this.taskService = taskService; -- using shortcut. Save for reference
  }

  get selectedUserTasks(){
    return this.taskService.getUserItems(this.sel_uid);
  }

  onCompleteItem(completed_id:string){
    return this.taskService.removeItem(completed_id);
  }

  onStartAddItem(){
    this.isAddingItem = true;
  }

  onCancelAddItem(){
    console.log("task.component.ts : onCancelAddItem() - isAddingItem = " + this.isAddingItem);
    this.isAddingItem = false;
  }

  // Remove due to implement injection
  // onAddItem(itemData: NewItemData){
  //   this.isAddingItem = false;
  // }
}
