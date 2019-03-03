import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/users/user.model';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  //@Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
