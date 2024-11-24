import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environments';
import { User } from '../models/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.api_url + '/users';

  constructor(private http: HttpClient) { }

  getUserProfile(): Observable<User> {  
     return this.http.get<User>(this.url + '/profile'); 
  }

  remove(login: string): Observable<any>{
    return this.http.delete(this.url + `/${login}`);
  }

  create(user: User): Observable<any>{
    return this.http.post(this.url, user);
  }

  update(user: User): Observable<any>{
    return this.http.put(this.url, user);
  }

   getUsers(): Observable<User[]> {  
    return this.http.get<User[]>(this.url); 
  }
}
