import { Component, OnInit } from '@angular/core';
import { User } from './user.model';
import { UserService } from '../services/user.service';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {
    users: User[];
    question: string;
    isActive: boolean;
    userToDelete: User;

    constructor(private userService: UserService) {}

    ngOnInit() {
        this.users = [];
        this.getUsers();        
    }

    private getUsers() {
        this.userService.getUsers()
            .subscribe((users: User[]) => {
                this.users = users;
            });
    }

    deleteUser(user: User) {
        this.question = `
            ¿Esta seguro que desea eliminar el usuario <b>"${user.name}"</b>?
        `;
        this.isActive = true;
        this.userToDelete = user;
    }


    onResponse(confirmation: boolean) {
        if (confirmation) {
            const { id } = this.userToDelete;

            this.userService.deleteUser(id)
                .subscribe(response => {
                    this.users= this.users
                        .filter(user => user.id !== id);
                    this.isActive = false;
                });
        } else {
            this.isActive = false;
        }

    }

  
}