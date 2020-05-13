import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../services/userlistClass';
@Injectable()
export class UserService {

  constructor(private http:HttpClient) { 
  }

  getUsers(): Observable<any> {
    const result =  this.http.get('https://reqres.in/api/users?page=2');

    return result;
  }
  registerUser(userdetails:User){
    return this.http.post('https://reqres.in/api/register',userdetails);
  }
}
