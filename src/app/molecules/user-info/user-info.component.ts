import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'atomic-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  @Input() parentFormGroup: FormGroup;
  @Input() infoFormName: string;
  @Input() textLabel: string;
  @Input() textName: string;
  @Input() textPhone: string;
  childForm: FormGroup;

  ngOnInit() {
    this.childForm = new FormGroup({
      functie: new FormControl(this.textLabel),
      naam: new FormControl,
      telefoonnummer: new FormControl
    });
    this.parentFormGroup.addControl(this.infoFormName, this.childForm)
  }
}
