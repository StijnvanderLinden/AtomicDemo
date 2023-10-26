import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'atomic-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  userForm: FormGroup;
  @Output() emitter: EventEmitter<User[]> = new EventEmitter<User[]>;
  users: User[];

  constructor(private userService: UserService) {
    this.userForm = new FormGroup({})
  }

  @Input() textLabel: string;
  @Input() textName: string;
  @Input() textPhone: string;
  @Input() textButton: string;
  
  ngOnInit(): void {
    
  }

  onSubmit(): void {
    this.users = this.userForm.value;
    this.userService.AddUsers(this.users).subscribe();
    this.emitter.emit(this.users);
  }
}
