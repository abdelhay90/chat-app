import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private _http: HttpClient) {}
  getAll() {
    return this._http.get<User[]>(`${environment.BASE_URL}/users`);
  }
}
