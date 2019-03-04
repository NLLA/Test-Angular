import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css']
})
export class UserCreateComponent implements OnInit {

  newUser:User=new User();
  title:String="Nuevo Usuario";
  
  constructor(private router: Router,
    private userService: UserService) { }

  ngOnInit() {
  }

  handleSubmit(user: User) {
      
    this.userService.createUser(user)
         .subscribe(response => {
             this.router.navigate(['/users']);
         });
  }

}
