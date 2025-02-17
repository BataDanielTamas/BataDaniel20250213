import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  standalone: false,
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  a: number = 0;
  b: number = 0;
  result: number = 0;

  setResult(result: number) {
    this.result = result;
  }
}