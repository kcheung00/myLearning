import { Component, Input } from '@angular/core';
import { ItemComponent } from "./item/item.component";
import { NewItemComponent } from "./new-item/new-item.component";
import { type NewItemData } from './new-item/new-item.model';

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

  tasks = [
    {
      id: 't1',
      userId: 'u1',
      title: 'Master Angular',
      summary:
        'Learn all the basic and advanced features of Angular & how to apply them.',
      dueDate: '2025-12-31',
    },
    {
      id: 't2',
      userId: 'u3',
      title: 'Build first prototype',
      summary: 'Build a first prototype of the online shop website',
      dueDate: '2024-05-31',
    },
    {
      id: 't3',
      userId: 'u3',
      title: 'Prepare issue template',
      summary:
        'Prepare and describe an issue template which will help with project management',
      dueDate: '2024-06-15',
    }
  ];

  get selectedUserTasks(){
    return this.tasks.filter((userItem) => userItem.userId === this.sel_uid);
  }

  onCompleteItem(completed_id:string){
    this.tasks = this.tasks.filter( (uItem) => uItem.id !== completed_id);
    //....
  }

  onStartAddItem(){
    this.isAddingItem = true;
  }

  onCancelAddItem(){
    console.log("task.component.ts : onCancelAddItem() - isAddingItem = " + this.isAddingItem);
    this.isAddingItem = false;
  }

  onAddItem(itemData: NewItemData){
    this.tasks.push({
      id: new Date().getTime().toString(),
      userId: this.sel_uid,
      title: itemData.title,
      summary: itemData.summary,
      dueDate: itemData.date,
    })
    this.isAddingItem = false;
  }
}
