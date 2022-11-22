import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private url = 'auth';

  constructor(private http: HttpClient) {}

  public getUsers(): Observable<User[]> {
    // return this.http.get<User[]>(`${environment.apiUrl}/${this.url}`);
   return this.http.get<User[]>(environment.apiUrl+"/"+this.url);//works
    // return this.http.get<Account[]>(this.baseUrl + 'accounts');

  }
}
