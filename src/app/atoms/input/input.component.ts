import { Component, Input } from '@angular/core';

@Component({
  selector: 'atomic-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  @Input() text: string;
}
