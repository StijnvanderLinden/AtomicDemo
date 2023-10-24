import { Component } from '@angular/core';

@Component({
  selector: 'atomic-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
  textLabel: string = "hoi";
  textButton: string = "hoi";
  textInput: string;
}
