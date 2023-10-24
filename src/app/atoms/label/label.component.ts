import { Component, Input } from '@angular/core';

@Component({
  selector: 'atomic-label',
  templateUrl: './label.component.html',
  styleUrls: ['./label.component.css']
})
export class LabelComponent {
  @Input() text: string;
}
