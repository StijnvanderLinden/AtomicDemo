import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users.component';
import { FormModule } from 'src/app/organisms/form/form.module';



@NgModule({
  declarations: [
    UsersComponent
  ],
  exports: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormModule
  ]
})
export class UsersModule { }
