import { Component, OnInit, Input,Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  titles:String[];

  @Input() users: User[];
  @Output() deleteUser: EventEmitter<any> = new EventEmitter<any>();
  
  constructor(private router: Router) { }

  ngOnInit() {
   this.titles = ['id', 'nombre', 'email', 'rol', 'edad'];
  }

  handleDelete(user: User) {
    this.deleteUser.emit(user);
  }

  userUpdate(id: number) {
    this.router.navigate(['users', id]);
  } 

}
