import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  url = "http://localhost:3000/users";

  GetUsers(): Observable<User[]>{
    return this.http.get<User[]>(this.url);
  }

  AddUsers(users: User[]): Observable<User[]> {
    return this.http.post<User[]>(this.url, users, this.httpOptions);
  }
}
