import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user:User;
  title:String="Modificar Usuario";

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.userService.getUsertById(id).subscribe((user: User) => {
        this.user = user;
    })
  }

  handleSubmit(user: User) {
    this.userService.updateUser(user.id, user)
         .subscribe(response => {
             this.router.navigate(['/users']);
         });
  }

}
