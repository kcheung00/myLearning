import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-new-item',
  standalone: true,
  imports: [],
  templateUrl: './new-item.component.html',
  styleUrl: './new-item.component.css'
})
export class NewItemComponent {
  @Output() cancelItem = new EventEmitter<void>();

  onCancelItem(){
    console.log("new-item.component.ts - onCancelItem()");
    this.cancelItem.emit();
  }

}
