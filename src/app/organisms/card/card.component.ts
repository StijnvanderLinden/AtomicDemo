import { Component, Input } from '@angular/core';

@Component({
  selector: 'atomic-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() textLabel: string;
  @Input() textName: string;
  @Input() textPhone: string;
  @Input() textButton: string;
}
