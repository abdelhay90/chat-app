import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model';
import {environment} from '../../environments/environment';
import {UserProfile} from '../model';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  constructor(private _http: HttpClient) {}
  getUserProfile() {
    return this._http.get<UserProfile>(`${environment.BASE_URL}/currentUser`);
  }
}
