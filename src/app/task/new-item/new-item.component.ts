import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewItemData } from './new-item.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-new-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-item.component.html',
  styleUrl: './new-item.component.css'
})
export class NewItemComponent {
  @Input( {required: true} ) sel_userId!: string;
  @Output() cancelItem = new EventEmitter<void>();
  
  // No need for the emit event due to the injection
  // @Output() addItem = new EventEmitter<NewItemData>();
  enteredTitle = "";
  enteredSummary = '';
  enteredDate = "";

  private taskService = inject(TaskService);

  // For signal example, use the following & import signal. No other changes need
  // enteredTitle = signal('');
  // enteredSummary = signal('');
  // enteredDate = signal('');

  onCancelItem(){
    console.log("new-item.component.ts - onCancelItem()");
    this.cancelItem.emit();
  }

  // The following function is used to bypass submit to backend service.
  onLocalSubmit(){
    this.taskService.addItem(
      {
        title: this.enteredTitle,
        summary: this.enteredSummary,
        date: this.enteredDate,
    },
    this.sel_userId
  );
  this.cancelItem.emit();
    // Replace the following with inject service
    // this.addItem.emit({
    //   title: this.enteredTitle,
    //   summary: this.enteredSummary,
    //   date: this.enteredDate
    // });
  }
}
