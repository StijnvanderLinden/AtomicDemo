import { Component } from '@angular/core';
import { RestapiService } from 'src/app/service/restapi.service';

@Component({
  selector: 'atomic-datatable',
  templateUrl: './datatable.component.html',
  styleUrls: ['./datatable.component.css']
})
export class DatatableComponent {
  constructor(private service: RestapiService) { }
}
