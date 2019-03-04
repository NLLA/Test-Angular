import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/users/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  @Input() user: User;
  @Input() title;
  @Output() handleSubmit: EventEmitter<User> = new EventEmitter<User>();
  
  constructor() { }

  ngOnInit() {
  }

  onSubmit(f: any) {
    if (f.valid) {
        this.handleSubmit.emit(this.user);
    }
}

}
