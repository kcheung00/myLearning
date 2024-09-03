import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { type NewItemData } from './new-item.model';

@Component({
  selector: 'app-new-item',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-item.component.html',
  styleUrl: './new-item.component.css'
})
export class NewItemComponent {
  @Output() cancelItem = new EventEmitter<void>();
  // @Output() addItem = new EventEmitter<{title: string; summary: string; date:string}>
  @Output() addItem = new EventEmitter<NewItemData>();
  enteredTitle = "";
  enteredSummary = '';
  enteredDate = "";

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
    this.addItem.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate
    });
  }
}
