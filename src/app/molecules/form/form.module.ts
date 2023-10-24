import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LabelModule } from '../../atoms/label/label.module';
import { FormComponent } from './form.component';
import { InputModule } from 'src/app/atoms/input/input.module';
import { ButtonModule } from 'src/app/atoms/button/button.module';



@NgModule({
  declarations: [
    FormComponent
  ],
  exports: [
    FormComponent
  ],
  imports: [
    CommonModule,
    LabelModule,
    InputModule,
    ButtonModule
  ]
})
export class FormModule { }
