import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'App-child',
  standalone: false,
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
  @Input() a: number = 0;
  @Input() b: number = 0;
  @Output() result = new EventEmitter<number>();

  calculate(operation: string) {
    if (operation === '+') {
      this.result.emit(this.a + this.b);
    } else if (operation === '-') {
      this.result.emit(this.a - this.b);
    }
  }
}