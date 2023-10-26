import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, ControlContainer, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'atomic-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit{

  constructor() { }
  
  @Input() parentFormGroup: FormGroup;
  @Input() text: string;
  @Input() parentControl: string;

  ngOnInit() {
  }
}
