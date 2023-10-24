import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/stories/User';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  constructor(private http: HttpClient) { }

  GetAllUsers(): Observable<User[]>{
    return this.http.get<User[]>("http://localhost:3000/users");
  }
}
