import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { type Item } from './item.model';
import { CardComponent } from "../../shared/card/card.component";

@Component({
  selector: 'app-item',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './item.component.html',
  styleUrl: './item.component.css'
})
export class ItemComponent {
  @Input({required: true}) myItem!: Item
  @Output() complete = new EventEmitter<string>();

  onCompleteItem(){
    this.complete.emit(this.myItem.id);
  }
}
