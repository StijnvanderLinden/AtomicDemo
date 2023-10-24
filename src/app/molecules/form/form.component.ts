import { Component, Input } from '@angular/core';

@Component({
  selector: 'atomic-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  @Input() textLabel: string;
  @Input() textName: string;
  @Input() textPhone: string;
  @Input() textButton: string;
  
}
