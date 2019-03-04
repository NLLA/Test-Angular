import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../users/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseURL: string;

  constructor(private http: HttpClient) {
      this.baseURL = environment.api;
      console.log(this.baseURL);
  }
  
  
  getUsers() {
    const fullUrl = `${this.baseURL}/users/`;
    return this.http.get(fullUrl);
  }

  createUser(user: User) {
    const fullUrl = `${this.baseURL}/users`;
    return this.http.post(fullUrl, user);
  }

  deleteUser(id: number) {
    const fullUrl = `${this.baseURL}/users/${id}`;
    return this.http.delete(fullUrl);
  }

  getUsertById(id: number) {
    const fullUrl = `${this.baseURL}/users/${id}`;

    return this.http.get(fullUrl);
  }

  updateUser(id: number, user: User) {
    const fullUrl = `${this.baseURL}/users/${id}`;

    return this.http.put(fullUrl, user);
  }

}
