import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header.component';
import { ButtonModule } from 'src/app/atoms/button/button.module';
import { LinkModule } from 'src/app/atoms/link/link.module';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    LinkModule
  ]
})
export class HeaderModule { }
