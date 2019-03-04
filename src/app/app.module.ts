import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserFormComponent } from './components/forms/user-form/user-form.component';
import { UserCreateComponent } from './users/user-create/user-create.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UsersComponent } from './users/users.component';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { routes } from './app.routing';
import { TitlePipe } from './pipes/title.pipe';
import { FormsModule} from '@angular/forms';
import { ConfirmModalComponent } from './components/modals/confirm-modal/confirm-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    UserFormComponent,
    UserCreateComponent,
    UserEditComponent,
    UserListComponent,
    UsersComponent,
    ConfirmModalComponent,
    TitlePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
