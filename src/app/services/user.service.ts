import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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

}
