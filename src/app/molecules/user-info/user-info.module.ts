import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './user-info.component';
import { LabelModule } from 'src/app/atoms/label/label.module';
import { InputModule } from 'src/app/atoms/input/input.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserInfoComponent
  ],
  exports: [
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    LabelModule,
    InputModule
  ]
})
export class UserInfoModule { }
