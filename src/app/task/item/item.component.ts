import { Component, EventEmitter, Input, Output } from '@angular/core';
import {Item} from './item.model';

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input({required: true}) myItem!: Item
  @Output() complete = new EventEmitter<string>();

  onCompleteTask(){
    this.complete.emit(this.myItem.id);
  }
}
