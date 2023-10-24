import { Component, Input } from '@angular/core';

@Component({
  selector: 'atomic-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  @Input() text: string;
}
