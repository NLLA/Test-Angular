import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
    users: User[];

    constructor(private userService: UserService) {}

    ngOnInit() {
        console.log("aqui");
        this.users = [];
        this.getUsers();        
    }

    private getUsers() {
        this.userService.getUsers()
            .subscribe((users: User[]) => {
                this.users = users;
            });
        console.log("usuarios"+this.users)
    }

  
}