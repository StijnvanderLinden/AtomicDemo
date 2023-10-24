import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { CardModule } from 'src/app/organisms/card/card.module';
import { ButtonModule } from 'src/app/atoms/button/button.module';



@NgModule({
  declarations: [
    MainComponent
  ],
  exports: [
    MainComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    ButtonModule
  ]
})
export class MainModule { }
