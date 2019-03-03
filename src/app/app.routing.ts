import { Route } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserCreateComponent } from './users/user-create/user-create.component';


export const routes: Route[] = [

    {
        path: 'users',
        component: UsersComponent
    },
    {
        path: 'nuevo-user',
        component: UserCreateComponent
    },
    {
        path: 'users/:id',
        component: UserEditComponent
    },
    {
        path: '',
        redirectTo: 'users',
        pathMatch: 'full'
    }
];